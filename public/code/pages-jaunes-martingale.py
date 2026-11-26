import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException, StaleElementReferenceException
import csv

# Créer un objet driver pour accéder à la page web
driver = webdriver.Chrome()

def scrape_all_company_info(url):
    driver.get(url)
    wait = WebDriverWait(driver, TIMEOUT)

    all_company_data = []

    try:
        # Attendre que la page soit complètement chargée
        wait.until(
            lambda driver: driver.execute_script('return document.readyState') == 'complete'
        )

        while True:
            # Obtenir la liste d'éléments d'entreprise à chaque itération
            company_elements = driver.find_elements(By.CSS_SELECTOR, "li.bi-generic")

            for element in company_elements:
                try:
                    company_name_element = element.find_element(By.CSS_SELECTOR,
                                                                "div.bi-header-title a.bi-denomination")
                    company_name = company_name_element.get_attribute("textContent")

                    company_link_element = element.find_element(By.CSS_SELECTOR,
                                                                "div.bi-header-title a.bi-denomination")
                    company_link = company_link_element.get_attribute("href")

                    # Ajouter les informations de base à la liste
                    company_info = {"company_name": company_name, "company_link": company_link}
                    all_company_data.append(company_info)

                except StaleElementReferenceException:
                    print("L'élément est devenu obsolète. Réessayer...")
                    continue
                except NoSuchElementException:
                    print("Certains éléments ne peuvent pas être trouvés pour cette entreprise.")
                    continue

            for company_info in all_company_data:
                # Naviguer vers le lien de l'entreprise
                driver.get(company_info['company_link'])
                time.sleep(2)  # Attendez que la page soit chargée

                # Extraire le site web de la page de l'entreprise
                website = "Site web non trouvé"
                try:
                    website_element = driver.find_element(By.CSS_SELECTOR, "a[href^='http']:not([href*='pagesjaunes'])")
                    website = website_element.get_attribute("href")
                except NoSuchElementException:
                    pass

                # Vérifier si l'élément de l'adresse est présent
                try:
                    address_element = WebDriverWait(driver, TIMEOUT).until(
                        EC.presence_of_element_located((By.CSS_SELECTOR, "div.bi-address"))
                    )
                    address = address_element.get_attribute("textContent").replace("Voir le plan", "")
                except TimeoutException:
                    address = "Adresse non disponible"

                # Vérifier si l'élément du numéro de téléphone est présent
                try:
                    phone_element = WebDriverWait(driver, TIMEOUT).until(
                        EC.presence_of_element_located((By.CSS_SELECTOR, "div.number-contact"))
                    )
                    phone = phone_element.get_attribute("textContent")
                except TimeoutException:
                    phone = "Numéro de téléphone non disponible"

                # Mettre à jour les informations de l'entreprise dans la liste
                company_info.update({"address": address, "phone": phone, "website": website})

            driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(2)

            new_company_elements = driver.find_elements(By.CSS_SELECTOR, "li.bi-generic")
            if len(new_company_elements) == len(company_elements):
                break

    except TimeoutException:
        print(f"Erreur : Aucune entreprise sur {url} n'est disponible")

    return all_company_data


# Constantes
urls = []
page_number = 1
for i in range(34):
    URL = f"https://www.pagesjaunes.fr/annuaire/chercherlespros?quoiqui=travaux%20maison&ou=Rh%C3%B4ne%20%2869%29&idOu=D069&quoiQuiInterprete=travaux%20maison&contexte=gIfsijLmI86DXz9nceh1oAxISMRndNFsTX8Pg%2Byl0iE%3D&page={page_number}"
    page_number += 1
    urls.append(URL)

TIMEOUT = 10

# Liste pour stocker toutes les informations
all_company_data = []

# Boucle sur toutes les URLs
for url in urls:
    # Appeler la fonction pour extraire toutes les informations des entreprises
    company_data = scrape_all_company_info(url)

    # Étendre la liste avec les nouvelles informations
    all_company_data.extend(company_data)

# Afficher les noms, les liens, les adresses, les numéros de téléphone et les sites web de toutes les entreprises sur la console
if all_company_data:
    for i, company_info in enumerate(all_company_data, start=1):
        print(f"{i}. {company_info['company_name']}")
        print(f"   Lien : {company_info['company_link']}")
        print(f"   Adresse : {company_info['address']}")
        print(f"   Téléphone : {company_info['phone']}")
        print(f"   Site Web : {company_info['website']}\n")
else:
    print("Aucune entreprise trouvée sur les pages.")

# Ouvrir le fichier csv en mode écriture
with open('entreprises.csv', 'w', encoding='UTF8', newline='') as f:
    # Créer l'objet writer
    writer = csv.writer(f)

    # Écrire les en-têtes des colonnes
    writer.writerow(['Nom de l\'entreprise', 'Lien', 'Adresse', 'Téléphone', 'Site Web'])

    # Écrire les données des entreprises
    for i, company_info in enumerate(all_company_data, start=1):
        # Supprimer les guillemets doubles des adresses
        company_address = company_info['address'].replace('"', '')

        writer.writerow(
            [company_info['company_name'], company_info['company_link'], company_address, company_info['phone'],
             company_info['website']])

# Fermer le navigateur web
driver.quit()
