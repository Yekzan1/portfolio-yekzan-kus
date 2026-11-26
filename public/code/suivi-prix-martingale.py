import requests
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
import csv
from bs4 import BeautifulSoup
from urllib.parse import urlparse
import os
import datetime

# Créer un objet driver pour accéder à la page web
driver = webdriver.Chrome()

# Créer un objet session pour réutiliser la même connexion HTTP
session = requests.Session()

# Définir une fonction pour extraire le prix à partir d'une URL
# Définir une fonction pour extraire le prix à partir d'une URL
def scrape_price(url, headers):
    # Envoyer une requête HTTP à l'URL
    response = session.get(url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Vérifier le statut de la réponse
    if response.status_code == 404:
        # Afficher un message d'erreur dans la console
        print(f"Erreur 404 : la page {url} n'existe pas")
        # Retourner None
        return None
    else:
        # Accéder à l'URL avec Selenium
        driver.get(url)

        # Attendre que le prix soit chargé
        wait = WebDriverWait(driver, 10)

        try:
            # On cherche le prix
            price_tag = soup.find('span', class_='a-price') or soup.find('span', id='priceblock_ourprice') or \
                        soup.find('span', id='priceblock_dealprice') or soup.find('span', id='priceblock_saleprice')
            if price_tag:
                value = price_tag.find('span', class_='a-offscreen').text

                # On cherche le nom du magasin avec la balise 'title'
                store = soup.find('title').text.split(':')[0]

                # On cherche le nom du site internet avec la méthode urlparse
                domain = urlparse(url).netloc

                print(f"La valeur du prix est : {value}")  # Ajoutez cette ligne pour vérifier la valeur du prix

                return value

            # Utiliser le sélecteur approprié pour le prix de ManoMano
            if "manomano.fr" in url:
                price_element = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, "sRiHzq")))
            elif "cdiscount.com" in url:
                price_element = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, "fpPrice")))
            elif "castorama.fr" in url:
                price_element = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, "b25ad5d5")))
            elif "maxoutil.com" in url:
                # Utiliser un sélecteur spécifique pour récupérer le prix (pas le prix conseillé)
                price_element = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, "price-wrapper")))
            elif "bricoprive.com" in url:
                price_element = wait.until(EC.visibility_of_element_located((By.ID, "productPrice")))
            elif "racetools.fr" in url:
                price_element = wait.until(EC.visibility_of_element_located((By.ID, "our_price_display")))
            elif "sobrico.com" in url:
                price_element = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, "current-price")))
            else:
                price_element = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, "current-price")))

            # Extraire le texte brut du prix
            price_text = price_element.get_attribute(
                'innerText')  # Utiliser get_attribute pour obtenir le texte brut

            # Supprimer les sauts de ligne du texte du prix
            price_text = price_text.replace('\n', '')

            # Retourner le prix
            return price_text.strip() if price_text else None


        except TimeoutException:

            # Afficher un message d'erreur dans la console
            print(f"Erreur : le prix n'a pas été chargé dans les 10 secondes sur la page {url}")
            # Retourner None
            return None

# Définir une fonction pour lire les anciens prix depuis le fichier CSV
def read_old_prices(file_path):
    old_prices = {}
    if os.path.exists(file_path):
        with open(file_path, 'r', newline='', encoding='utf-8') as csvfile:
            reader = csv.reader(csvfile, delimiter=';')  # Définir le séparateur à ';'
            next(reader)  # Ignorer la ligne d'en-tête
            for row in reader:
                if len(row) == 2:  # Vérifier que la ligne contient deux valeurs
                    url, old_price = row
                    old_prices[url] = old_price
                else:
                    print(f"La ligne suivante dans le fichier CSV ne contient pas le nombre attendu de valeurs : {row}")
    return old_prices

# Définir une fonction pour comparer les anciens prix avec les nouveaux prix
def compare_and_save_prices(urls, headers, old_prices):
    changed_prices = []  # Pour enregistrer les changements de prix

    for url in urls:
        new_price = scrape_price(url, headers)

        if new_price is not None:
            if url in old_prices:
                old_price = old_prices[url]
                if new_price != old_price:
                    print(f"Le prix du produit sur {url} a changé. Ancien prix: {old_price}, Nouveau prix: {new_price}")
                    # Ajouter les informations du produit à la liste des prix changés
                    changed_prices.append({'url': url, 'new_price': new_price})
            else:
                print(f"Le prix du produit sur {url} n'a pas d'ancien prix pour la comparaison.")
        else:
            print(f"Le prix du produit sur {url} n'a pas pu être récupéré.")

    return changed_prices

# Définir une fonction pour écrire les nouveaux prix dans le fichier CSV des anciens prix
def write_new_prices(file_path, changed_prices):
    with open(file_path, 'a', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        for item in changed_prices:
            writer.writerow([item['url'], item['new_price'], datetime.datetime.now()])


# Définir une fonction pour extraire le nom du site à partir de l'URL
def get_site_name(url):
    # Séparer l'URL par le caractère "/"
    parts = url.split("/")
    # Prendre la deuxième partie qui correspond au nom de domaine
    site_name = parts[2]
    # Retourner le nom du site
    return site_name

# Liste des URLs à scraper
urls = [
    "https://www.cdiscount.com/bricolage/outillage/perceuse-visseuse-sans-fil-ryobi-one-r18dd3-0-2/f-166010101-ryo4892210149152.html#mpos=0|cd",
    "https://www.cdiscount.com/jardin/outillage-de-jardin/coupe-bordures-sans-fil-18v-one-ryobi-olt1832-d/f-1632620-ryo4892210147684.html?idOffre=288967348&awc=6948_1682324147_2c1ac0c481d9659aff1ca2be111b55b3&cid",
    "https://www.cdiscount.com/bricolage/outillage/makita-dur181z-coupe-bordure-sans-fil-batterie/f-166010111-mak0088381675451.html",
    "https://www.cdiscount.com/bricolage/outillage/scie-sauteuse-makita-djv182z-machine-seule/f-166010106-mak0088381651882.html?idOffre=346453114#mpos=0|mp",
    "https://www.cdiscount.com/bricolage/outillage/scie-sauteuse-pendulaire-ryobi-18v-oneplus-brushle/f-166010106-ryo4892210170521.html",
    "https://www.cdiscount.com/bricolage/outillage/scie-sauteuse-bosch-gst-18-v-li-b/f-166010106-bos3165140786973.html?",
    "https://www.cdiscount.com/bricolage/outillage/scie-sauteuse-milwaukee-m18-bjs-0-18v-sans-batteri/f-166010106-mil4002395157990.html?idOffre=2392441786#mpos=0|mp",
    "https://www.cdiscount.com/jardin/outillage-de-jardin/tronconneuse-sans-fil-18v-one-ryobi-ocs1830-gui/f-1632604-ryo4892210147820.html",
    "https://www.cdiscount.com/jardin/outillage-de-jardin/tronconneuse-xr-flexvolt-54-v-40-cm-sans-batterie/f-1632618-dew5035048657423.html",
    "https://www.cdiscount.com/bricolage/outillage/ponceuse-excentrique-gex-18v-125-sans-batterie-ni/f-166010103-bos4059952539652.html?idOffre=2441169056#mpos=0|mp",
    "https://www.cdiscount.com/bricolage/outillage/scie-circulaire-18v-sans-batterie-ni-chargeur/f-166010106-dew5035048555262.html",
    "https://www.cdiscount.com/bricolage/outillage/scie-circulaire-sans-batter/f-166010106-mil4002395238248.html",
    "https://www.cdiscount.com/bricolage/outillage/scie-circulaire-sans-fil-bosch-professional-18v/f-166010106-bos3165140869324.html",
    "https://www.cdiscount.com/bricolage/outillage/ryobi-scie-circulaire-18-v/f-166010106-ryo4892210141071.html",
    "https://www.cdiscount.com/bricolage/outillage/laser-croix-25-m-12-v-cxt-li-ion-makita-en-saco/f-1660102-mak0088381851893.html",
    "https://www.cdiscount.com/bricolage/outillage/ryobi-meuleuse-d-angle-nu-brushless-18v-125-mm/f-166010111-ryo4892210149404.html#mpos=0|cd",
    "https://www.cdiscount.com/bricolage/outillage/ryobi-marteau-perforateur-18-v/f-166010110-ryo4892210130211.html#mpos=0|cd",
    'https://amzn.to/3QvBXYI',
    'https://amzn.to/3X8Vlxg',
    'https://amzn.to/3XqqV9q',
    'https://amzn.to/3GADg47',
    'https://amzn.to/3H8dqFJ',
    'https://amzn.to/3KU0OCU',
    'https://amzn.to/3Am6CQK',
    'https://amzn.to/3kICtqx',
    'https://amzn.to/3R97IXY',
    'https://amzn.to/405eXEq',
    'https://amzn.to/3XRDTxH',
    'https://amzn.to/3kFGQ5w',
    'https://amzn.to/3LsaqX0',
    'https://amzn.to/41XX6iy',
    'https://amzn.to/3oIf3DB',
    'https://amzn.to/3IXtHip',
    'https://amzn.to/3iUTVrd',
    'https://amzn.to/3HjCXMD',
    'https://amzn.to/3whdhtz',
    'https://amzn.to/3XEpqEy',
    'https://amzn.to/3wBSt0e',
    'https://amzn.to/3HcmF70',
    'https://amzn.to/3WIaCUs',
    'https://amzn.to/3XILLRI',
    'https://amzn.to/3kQWbk0',
    'https://amzn.to/3mxxf1O',
    'https://amzn.to/41Qy6dM',
    'https://amzn.to/3CYBMzq',
    'https://amzn.to/3ZJW9u7',
    'https://amzn.to/3iQAKP6',
    'https://amzn.to/3WgONv6',
    'https://amzn.to/3QOnmYy',
    'https://amzn.to/3WV58qA',
    'https://amzn.to/3WT09qe',
    'https://amzn.to/3k62sYl',
    "https://www.racetools.fr/meuleuse/9261-meuleuse-d-angle-sans-fil-milwaukee-4933411210-hd-18-ag-115-mm-4002395235681.html",
    "https://www.racetools.fr/debroussailleuse/3628-coupe-bordures-dewalt-dcm561pb-18-v-xr-brushless-machine-nue-5035048615324.html",
    "https://www.racetools.fr/scie-sauteuse/944-scie-sauteuse-makita-djv182z-machine-nue-0088381651882.html",
    "https://www.racetools.fr/perforateur-burineur-18v/9178-perforateur-makita-dhr171zj-sds-plus-18v-li-ion-17mm-machine-nue-0088381848534.html",
    "https://www.racetools.fr/tronconneuse/8812-tronconneuse-flexvolt-54v-xr-dewalt-dcm575n-machine-nue-5035048657423.html",
    "https://www.racetools.fr/laser-ligne/101-laser-en-croix-dewalt-dw088k-5035048338575.html",
    "https://www.racetools.fr/meuleuse/9261-meuleuse-d-angle-sans-fil-milwaukee-hd-18-ag-0-115-mm-4002395235681.html",
    "https://www.racetools.fr/scie-sauteuse/944-scie-sauteuse-makita-djv182z-machine-nue-0088381651882.html",
    "https://www.racetools.fr/meuleuse/6510-meuleuse-dewalt-dcg405n-xr-18v-125mm-brushless-machine-nue-5035048665503.html",
    "https://www.racetools.fr/scie-circulaire/26-scie-circulaire-makita-dss610z-18v-lxt-machine-nue-0088381657266.html",
    "https://www.racetools.fr/ponceuse-polisseuse/386-ponceuse-excentrique-makita-dbo180z-o125mm-18v-li-ion-0088381658584.html",
    "https://www.racetools.fr/ponceuse-polisseuse/11072-ponceuse-excentrique-milwaukee-m18bos125-0-125-mm-4933464228-machine-nue-4058546221737.html",
    "https://www.racetools.fr/tronconneuse/2887-tronconneuse-makita-duc353z-36-v-2-x-18-v-li-ion-35-cm-machine-nue-0088381832724.html",
    "https://www.racetools.fr/debroussailleuse/483-coupe-bordure-makita-dur181z-18-v-li-ion-machine-nue-0088381675451.html",
    "https://www.bricoprive.com/80335085-les-essentiels-electroportatif-professionnel-dewalt/612501331-coupe-bordures-dewalt-dcm561pb-18-v-xr-brushless-machine-nue-5035048615324.html",
    "https://www.bricoprive.com/80363217-les-essentiels-ryobi/612698085-coupe-bordures-18v-one-o30-cm-o-fil-16-mm-machine-nue-4892210147684.html",
    "https://www.bricoprive.com/80363217-les-essentiels-ryobi/612698085-coupe-bordures-18v-one-o30-cm-o-fil-16-mm-machine-nue-4892210147684.html",
    "https://www.bricoprive.com/80335085-les-essentiels-electroportatif-professionnel-dewalt/612501331-coupe-bordures-dewalt-dcm561pb-18-v-xr-brushless-machine-nue-5035048615324.html",
    "https://www.bricoprive.com/80299955-les-essentiels-makita/612316967-scie-sauteuse-makita-djv182z-machine-nue-0088381651882.html?queryI",
    "https://www.bricoprive.com/80335085-les-essentiels-electroportatif-professionnel-dewalt/612501327-ponceuse-excentrique-dewalt-dcw210nt-125-mm-machine-nue-5035048711699.html?queryID=0a830c3eaa5b77d5270932995e03b8c5;",
    "https://www.bricoprive.com/80212124-les-essentiels-bricolage-grandes-marques?productNotAvailable",
    "https://www.bricoprive.com/80363217-les-essentiels-ryobi/612698072-tronconneuse-18v-one-brushless-chaine-30-cm-machine-nue-4892210147820.html",
    "https://www.bricoprive.com/80212124-les-essentiels-bricolage-grandes-marques?productNotAvailable",
    "https://www.bricoprive.com/80335085-les-essentiels-electroportatif-professionnel-dewalt/612501334-meuleuse-dewalt-dcg405n-xr-18v-125mm-brushless-machine-nue-5035048665503.html?queryID=2c726da00d6bb3003d3e96be4b258bff;",
    "https://www.bricoprive.com/80335087-les-essentiels-bosch-professionnel/613410546-meuleuse-angulaire-sans-fil-bosch-gws-18-125v-li-machine-nue-3165140726382.html?queryID=62025eac03366c443c8d2ef84b3398a6;",
    "https://www.bricoprive.com/80212124-les-essentiels-bricolage-grandes-marques/612373542-milwaukee-hd-18-ag-0-meuleuse-d-angle-sans-fil-115-mm-solo-sans-accessoires-ni-batteries-ni-chargeur-4933411210--4002395235681.html?queryID=82a5078466caf65d900ecf5175697a8a;",
    "https://www.bricoprive.com/80299955-les-essentiels-makita/612344259-meuleuse-makita-dga504z-lxt-18-v-brushless-125mm-machine-nue-0088381675888.html?wiz_medium=search&wiz_source=google&wiz_campaign=18272264841&wiz_term=&wiz_content={adsetName}&gclid=Cj0KCQiA8aOeBhCWARIsANRFrQFcA4Dc9s6a3jrwXhs886G0EIHWchzSE4moUi-ECDZOJhuqFfjxy80aAtsLEALw_wcB",
    "https://www.bricoprive.com/80363217-les-essentiels-ryobi/612697991-meuleuse-d-angle-brushless18v-one-o125-mm-machine-nue-4892210149404.html?queryID=470d726a4d39fce5858501c64a68fb8a;",
    "https://www.bricoprive.com/80299955-les-essentiels-makita/612325266-scie-circulaire-makita-dss610z-18v-lxt-machine-nue-0088381657266.html",
    "https://www.bricoprive.com/80299955-les-essentiels-makita/612519372-ponceuse-excentrique-makita-dbo180z-125mm-18v-li-ion-0088381658584.html?queryID=a7e07b0cae39b8b57ecf06efa30ae20a;",
    "https://www.bricoprive.com/80335085-les-essentiels-electroportatif-professionnel-dewalt/612496979-tronconneuse-flexvolt-54v-xr-dewalt-dcm575n-machine-nue-5035048657423.html",
    "https://www.manomano.fr/p/makita-ddf482z-18v-lxt-drill-driver-bare-unit-38790699",
    "https://www.manomano.fr/p/dewalt-dcg405n-meuleuse-dangle-sans-fil-18v-125mm-sans-batterie-sans-chargeur-6193657",
    "https://www.manomano.fr/p/meuleuse-18v-nue-hd18ag-0-milwaukee-4933411210-7974",
    "https://www.manomano.fr/p/meuleuse-dangle-brushless-ryobi-18v-oneplus-r18ag7-0-4543743",
    "https://www.manomano.fr/p/laser-autonivelant-dewalt-dw088k-34311778?model_id=856425&referer_id",
    "https://www.manomano.fr/p/makita-laser-croix-25-m-12-v-cxt-li-ion-sans-batterie-ni-chargeur-sk105dz-11290295?model_id=11290295&referer_id=668893&idealoid=2303061027592490291",
    "https://www.manomano.fr/p/ryobi-scie-circulaire-18-v-4203893",
    "https://www.manomano.fr/p/bosch-professional-scie-circulaire-sans-fil-gks-18v-57-g-sans-batterie-ni-chargeur-06016a2200-40665315",
    "https://www.manomano.fr/catalogue/p/scie-circulaire-sans-fil-18v-li-ion-set-hd18-cs-402b-2x-40ah-165mm-4933441400-milwaukee-20879562?",
    "https://www.manomano.fr/p/ponceuse-excentrique-m18-bos125-502b-milwaukee-9833626",
    "https://www.manomano.fr/p/ponceuse-excentrique-ryobi-18v-oneplus-sans-batterie-ni-chargeur-rros18-0-51254064",
    "https://www.manomano.fr/p/makita-dbo-180-z-ponceuse-excentrique-sans-fil-18v-125mm---sans-batterie-sans-chargeur-50099384",
    "https://www.manomano.fr/p/tronconneuse-sans-fil-ryobi-ocs1830-sans-batterie-li-ion-longueur-de-lame-300-mm-8092671",
    "https://www.manomano.fr/p/makita-jr105dz-108v-li-ion-schuifaccu-reciprozaag-body-12507644",
    "https://www.manomano.fr/p/scie-sauteuse-milwaukee-m18-bjs-0-18v-sans-batterie-ni-chargeur-4933451391-2729299",
    "https://www.manomano.fr/p/ponceuse-excentrique-sans-fil-dewalt-dcw210nt-dcw210nt-xj-sans-batterie-18-v-1-pcs-11983447",
    "https://www.manomano.fr/p/coupe-bordure-18-v-li-ion-machine-seule-makita-dur181z-18644352",
    "https://www.manomano.fr/p/perforateur-sds-compact-18v-12j-epta-m18-bh-0x-milwaukee-sans-batterie-4933459542-5900497?model_id=5900497&referer_id=668893&idealoid=2301091425526881794",
    "https://www.manomano.fr/p/ryobi-perceuse-visseuse-18v-one-sans-batterie-ni-chargeur-r18dd3-0-40190809",
    "https://www.manomano.fr/p/scie-sauteuse-gst-18-v-li-nue-bosch-060158j304-270638?",
    "https://www.manomano.fr/p/ponceuse-excentrique-sans-fil-gex-18v-125-0601372201-bosch-33312111",
    "https://www.manomano.fr/p/makita-scie-sauteuse-brushless-lxt-135mm-18v-et-un-coffret-makpac-1007570",
    "https://www.manomano.fr/p/ryobi-brushless-scie-sauteuse-pendulaire-18v-sans-batterie-ni-chargeur-r18js-7-11414324",
    "https://www.manomano.fr/p/coupe-bordures-33cm-18v-xr-moteur-sans-charbon-sans-batterie-ni-chargeur-dewalt-dcm561pb-1695254",
    "https://www.manomano.fr/p/ryobi-coupe-bordures-dresse-bordures-25-30-cm-18-v-one-vendu-sans-batterie-ni-chargeur-olt1832-37459116?model_id=19624198&referer",
    "https://www.manomano.fr/p/dewalt-tronconneuse-a-batterie-54v-40cm-sans-batterie-ni-chargeur-dcm575n-3529650",
    "https://www.manomano.fr/p/scie-circulaire-xr-18v-165-mm-machine-seule-dans-tstak-6363712",
    "https://www.manomano.fr/p/dewalt-scie-sauteuse-sans-fil-xr-18v-solo-dcs335nt-9048642?product_id=27061986",
    "https://www.manomano.fr/p/makita-meuleuse-125mm-18v-dga506z-solo-12105523",
    "https://www.manomano.fr/p/perforateur-sds-plus-18-v-li-ion-17-mm-produit-seul-makita-dhr171zj-5804391?product_id=15330825",
    "https://www.manomano.fr/p/bosch-gws18125vlin-18v-125mm-angle-grinder-bare-unit-32948698",
    "https://www.sobrico.com/p/bosch-06019h4100-perceuse-visseuse-18v-gsr-18v-28-batterie-chargeur-boite-carton-bosch-06019h4100_SKU780517.html",
    "https://www.sobrico.com/p/bosch-060193a307-meuleuse-angulaire-18v-gws-18-125-v-li-125mm-batterie-chargeur-boite-carton-bosch-060193a307_SKU767801.html",
    "https://www.sobrico.com/p/makita-ddf482z-perceuse-visseuse-18v-batterie-chargeur-boite-carton-makita-ddf482z_SKU747112.html",
    "https://www.sobrico.com/p/makita-dss610z-scie-circulaire-18v-batterie-chargeur-makita-dss610z_SKU744323.html",
    "https://www.sobrico.com/p/bosch-perforateur-sds-18v-bosch-gbh-18v-21-batterie-chargeur-boite-carton-0611911100_SKUM135335.html",
    "https://www.sobrico.com/p/milwaukee-4933459542-perforateur-burineur-sds-plus-18v-m18-bh-0x-batterie-chargeur-coffret-hd-box-milwaukee-4933459542_SKU751369.html?utm_medium=affiliate&utm_source=idealo&utm_campaign=flux",
    "https://www.sobrico.com/p/dewalt-dcs391nt-scie-circulaire-xr-18v-165mm-batterie-chargeur-coffret-tstak-dewalt-dcs391nt_SKU743951.html",
    "https://www.sobrico.com/p/dewalt-ponceuse-excentrique-fil-xr-brushless-dewalt-dcw210nt-18-v-batterie-chargeur-coffret-tstak_SKUM86616.html",
    "https://www.sobrico.com/p/dewalt-scie-sauteuse-brushless-xr-18v-dewalt-dcs334nt-xj-batterie-chargeur-coffret-tstak_SKUM84067.html",
    "https://www.sobrico.com/p/makita-ddf482z-perceuse-visseuse-18v-batterie-chargeur-boite-carton-makita-ddf482z_SKU747112.html",
    "https://www.sobrico.com/p/dewalt-dcm575n-xj-tronconneuse-xr-flexvolt-54v-40cm-batterie-chargeur-blister-dewalt-dcm575n_SKU775676.html",
    "https://www.sobrico.com/p/bosch-601372200-ponceuse-excentrique-18v-gex-18v-125-batterie-chargeur-coffret-boxx-bosch-0601372200_SKU773660.html",
    "https://www.sobrico.com/p/makita-meuleuse-18-v-makita-dga504z-batterie-chargeur_SKUM85594.html",
    "https://www.sobrico.com/p/makita-perforateur-sds-18v-makita-dhr171zj-batterie-chargeur-coffret-makpac_SKUM83439.html",
    "https://www.maxoutil.com/perceuse-a-percussion-milwaukee-m18-fpd2-502x-fuel-sans-batterie-ni-chargeur-4933464263.html#mpos=0|cd",
    "https://www.maxoutil.com/perceuse-visseuse-18-v-li-ion-o-13-mm-makita-sans-batterie-ni-chargeur-ddf482z.html#desc",
    "https://www.maxoutil.com/ponceuse-orbitale-excentrique-m18bos125-0-milwaukee-125-mm-4933464228.html",
    "https://www.maxoutil.com/scie-sauteuse-dewalt-18v-sans-batterie-ni-chargeur-en-coffret-tstak-dcs334nt.html",
    "https://www.maxoutil.com/5476-scie-circulaire-makita-nu-165-mm-18-v-lxt-machine-seule-bss610z.html",
    "https://www.maxoutil.com/tronconneuse-sans-fil-makita-36v-2x18v-li-ion-sans-batterie-ni-chargeur-guide-35-cm-duc353z.html",
    "https://www.maxoutil.com/laser-croix-25-m-12-v-cxt-li-ion-makita-en-sacoche-sk105dz.html",
    "https://www.maxoutil.com/meuleuse-o125-mm-18v-li-ion-dga504z-makita-sans-batterie-dga504z.html",
    "https://www.maxoutil.com/ponceuse-excentrique-xr-18v-125-mm-brushless-dewalt-sans-batterie-ni-chargeur-coffret-tstak-dcw210nt-xj.html",
    "https://www.maxoutil.com/perforateur-sds-compact-18v-1-2j-epta-m18-bh-0x-milwaukee-sans-batterie-4933459542.html?utm_source=idea&utm_medium=comparateur&utm_campaign=CYB_lengow_idea",
    "https://www.manomano.fr/p/perforateur-bosch-gbh-18v-21-machine-seule-carton-23502745",
    "https://amzn.to/3Xi8Dab",
    "https://www.bricoprive.com/80335085-les-essentiels-electroportatif-professionnel-dewalt/612916891-perforateur-dewalt-dch263n-xj-sds-18v-machine-nue-5035048708057.html?queryID=3e1a7ebfc24e4a9f90258bd253109191;",
    "https://www.racetools.fr/perforateur-burineur-18v/8289-perforateur-dewalt-dch263n-xj-sds-18v-machine-nue-racetools-5035048708057.html",
    "https://amzn.to/3ZtLAen",
    "https://www.manomano.fr/p/ryobi-r18sds-0-marteau-perforateur-4-modes-18v-sds-plus-sans-batterie-ni-chargeur-1200827",
    "https://www.cdiscount.com/bricolage/outillage/ryobi-marteau-perforateur-18-v/f-166010110-ryo4892210130211.html#mpos=0|cd",
    "https://www.castorama.fr/perforateur-ryobi-r18sds-0-18v-sans-batterie-1-3j/4892210130211_CAFR.prd",
    "https://amzn.to/3mfXUzJ",
    "https://www.manomano.fr/p/ryobi-pack-chargeur-rapide-20-a-1-batterie-lithium-18-v-40-ah-one-rc18120-140-34356660",
    "https://www.bricoprive.com/80363217-les-essentiels-ryobi/612698030-pack-1-batterie-li-ion-18v-one-li-ion-4-ah-1-chargeur-rapide-4892210152145.html",
    "https://amzn.to/3EEG288",
    "https://www.manomano.fr/p/ryobi-batterie-18-v-50-ah-chargeur-rapide-rc18120-150-4258904",
    "https://www.bricoprive.com/80363217-les-essentiels-ryobi/612698139-1-batterie-18v-one-li-ion-5-ah-chargeur-rapide-4892210152206.html",
    "https://amzn.to/3IBdPQS",
    "https://www.manomano.fr/p/pack-2-batteries-ryobi-18v-oneplus-50ah-lithiumplus-1-chargeur-rapide-20ah-rc18120-250-4382672?model_id=4382672&referer",
    "https://www.bricoprive.com/80363217-les-essentiels-ryobi/612698141-pack-de-2-batteries-18v-one-li-ion5ah-chargeur-rapide-4892210176127.html",
    "https://amzn.to/3ZjpjPu",
    "https://www.sobrico.com/p/makita-195584-2-chargeur-rapide-makstar-9-6-18v-dc18rc-boite-carton-makita-195584-2_SKU744331.html",
    "https://www.manomano.fr/p/batterie-aeg-18v-lithium-ion-30ah-hd-l1830r-hd-26255398",
    "https://www.maxoutil.com/chargeur-rapide-makstar-li-ion-ni-mh-9-6-a-18-v-makita-dc18rc.html",
    "https://www.racetools.fr/chargeur-pour-outillage-electroportatif/29-chargeur-rapide-makstar-makita-dc18rc-li-ion-ni-mh-96-a-18v-0088381373579.html",
    "https://amzn.to/3kpEfNv",
    "https://www.sobrico.com/p/bosch-1600a0214c-pack-2-batteries-18v-procore-5-5-ah-chargeur-gal-1880-cv-professional-boite-carton-bosch-1600a0214c_SKU762240.html",
    "https://www.manomano.fr/p/batterie-bosch-gba-18v-40-ah-procore-9048093?model_id=56032594",
    "https://www.maxoutil.com/2-batteries-bosch-procore18v-5-5ah-chargeur-gal-1880-cv-1600a0214c.html",
    "https://www.racetools.fr/batterie-chargeur/8815-pack-2-batteries-bosch-procore18v-55ah-professional-chargeur-gal-1880-cv-professional-4059952560106.html",
    "https://amzn.to/41FvD6a",
    "https://www.sobrico.com/p/bosch-1600a02149-batterie-procore-18-v-5-5ah-boite-carton-bosch-1600a02149_SKU780850.html",
    "https://www.manomano.fr/p/batterie-bosch-gba-18v-40-ah-procore-9048093?model_id=54671735&referer",
    "https://www.bricoprive.com/80335087-les-essentiels-bosch-professionnel/612495922-batterie-bosch-procore-gba-18v-55ah-4059952560076.html",
    "https://www.racetools.fr/batterie/9017-batterie-bosch-procore-gba-18v-55ah-4059952560076.html",
    "https://amzn.to/3m7P86Y",
    "https://www.manomano.fr/p/milwaukee-pack-m18-nrg-902-18v-2x90ah-redlithium-ion-4933451422-5912401?model_id=56362493&referer",
    "https://www.maxoutil.com/batterie-milwaukee-m18-b5-18v-5-0ah-red-li-ion-systeme-m18-4932430483.html",
    "https://www.bricoprive.com/80212124-les-essentiels-bricolage-grandes-marques/613360266-milwaukee-m18-b5-batterie-18-v-50-ah-5000-mah-4932430483-4002395381449.html",
    "https://amzn.to/3SvBtTt",
    "https://www.manomano.fr/p/chargeur-rapide-milwaukee-m12-18fc-m12-m18-1694627?model_id=51303038&referer",
    "https://www.maxoutil.com/chargeur-universel-milwaukee-pour-batterie-m12-18-fc-4932451079.html",
    "https://amzn.to/3Z80cQ8",
    "https://www.manomano.fr/p/milwaukee-pack-nrg-12v-batterie-2x4ah-chargeur-4933459211-3091835?model_id=5878014&referer",
    "https://www.maxoutil.com/pack-nrj-18v-5-0ah-red-li-ion-m18nrg503-4933451423.html",
    "https://www.racetools.fr/batterie-chargeur/9814-pack-energie-m18nrg-503-milwaukee-4933451423-18v-50ah-red-lithium-1-batterie-m12-2ah-offerte-4002395162628.html",
    "https://amzn.to/3k3R4g0",
    "https://www.sobrico.com/p/makita-batterie-makita-makstar-li-ion-18-v-5-ah-bl1850b-632f15-1_SKUM83808.html",
    "https://www.manomano.fr/p/batterie-bl1860b-18v-60ah-li-ion-makita-197422-4-2432783",
    "https://www.cdiscount.com/bricolage/outillage/batterie-makita-bl1850b-18-volt-5ah/f-166010120-mak0088381459129.html",
    "https://www.racetools.fr/batterie/1933-batterie-makita-bl1850b-li-ion-18-v-5-ah-temoin-de-charge-integre-0088381463911.html",
    "https://amzn.to/3XFZcRI",
    "https://www.manomano.fr/p/makita-kit-avec-2x-batteries-makita-bl-1850-18-v-50-ah-li-ion-chargeur-rapide-dc-18-rc-8051036",
    "https://www.maxoutil.com/pack-makita-2-batteries-bl1850b-chargeur-dc18rc-197570-9.html",
    "https://www.bricoprive.com/80212124-les-essentiels-bricolage-grandes-marques/613015434-makita-pack-energie-18-v-li-ion-2x-batteries-bl1850b-50ah-chargeur-rapide-dc18rc-197570-9--0088381461788.html",
    "https://amzn.to/40YndX5",
    "https://www.manomano.fr/p/makita-197629-2-set-de-demarrage-18v-li-ion-accu-2x-50ah-chargeur-double-dans-makpac-40653311",
    "https://www.cdiscount.com/bricolage/outillage/pack-energie-18-v-li-ion-avec-2-batteries-5-ah/f-166010120-mak0088381463195.html",
    "https://www.bricoprive.com/80299955-les-essentiels-makita/612746338-pack-energie-makita-197629-2-18v-li-ion-2-batteries-50-ah-1-chargeur-double-avec-coffret-makpac-0088381463195.html",
    "https://www.racetools.fr/batterie-chargeur/8085-pack-energie-makita-197629-2-18v-li-ion-2-batteries-50-ah-1-chargeur-double-avec-coffret-makpac-0088381463195.html",
    "https://amzn.to/3YWLzir",
    "https://www.sobrico.com/p/dewalt-dcb182-xj-batterie-xr-li-ion-18v-4ah-dewalt-dcb182-xj_SKU756706.html",
    "https://www.manomano.fr/p/dewalt-dcb182-xr-18v-li-ion-battery-pack-4ah-34663733",
    "https://www.racetools.fr/batterie/378-batterie-dewalt-dcb182-li-ion-18-v-40-ah-5035048392782.html",
    "https://amzn.to/41iW0i3",
    "https://www.sobrico.com/p/dewalt-dcb115p2-qw-pack-2-batteries-xr-18v-5ah-1-chargeur-multivoltage-boite-carton-dewalt-dcb115p2-qw_SKU743932.html",
    "https://www.manomano.fr/p/pack-2-batteries-18v-li-ion-5ah-chargeur-dcb105p2-910635",
    "https://www.maxoutil.com/pack-18v-li-ion-dewalt-5-0ah-2-batteries-chargeur-dcb115p2.html",
    "https://amzn.to/3YTPlJC",
    "https://www.sobrico.com/p/dewalt-dcb132-qw-chargeur-double-12-18-54v-xr-dewalt-dcb132-qw_SKU775666.html",
    "https://www.manomano.fr/p/lot-de-20x-couvercle-vertical-pour-bracelet-ut50b-fixation-a-clip-long-2m-ut50c-2707111",
    "https://amzn.to/3IOAXww",
    "https://www.sobrico.com/p/bosch-1600a002u5-batterie-gba-18-v-5-0-ah-bosch-1600a002u5_SKU746602.html",
    "https://www.manomano.fr/p/bosch-professional-1600a002u5-batterie-gba-18-v-5-ah-m-c-2965645",
    "https://www.maxoutil.com/batterie-18v-gba-5-0ah-bosch-1600a002u5.html",
    "https://www.racetools.fr/batterie/2347-batterie-bosch-gba-18-v-50-ah-m-c-professional-3165140791649.html",
    "https://amzn.to/3XV95Lq",
    "https://www.sobrico.com/p/bosch-1600a01ba3-pack-2-batteries-bosch-procore18v-4-0ah-gal-18v-40-professional-bosch-1600a01ba3_SKU751940.html",
    "https://www.manomano.fr/p/bosch-set-de-base-2-batteries-gba-18v-40ah-gal-18v-40-1600a019s0-12174371",
    "https://www.cdiscount.com/bricolage/outillage/bosch-professional-starter-set-batterie-2x18v-4-0a/f-166010120-bos3165140967969.html",
    "https://www.maxoutil.com/pack-bosch-2-batteries-procore-18v-4-0-ah-chargeur-gal18v-40-1600a01ba3.html",
    "https://amzn.to/3QvBXYI",
    "https://www.sobrico.com/p/milwaukee-perceuse-visseuse-percussion-18v-milwaukee-m18fpd2-0x-batterie-chargeur-coffret-hd-box-4933464263_SKUM132555.html",
    "https://www.manomano.fr/p/milwaukee-m18-fpd2-0-perceuse-visseuse-a-percussion-sans-fil-18v-135nm-solo-sans-batterie-ni-chargeur-19049071",
    "https://www.maxoutil.com/perceuse-a-percussion-milwaukee-m18-fpd2-502x-fuel-sans-batterie-ni-chargeur-4933464263.html",
    "https://amzn.to/3X8Vlxg",
    "https://www.sobrico.com/p/makita-ddf482z-perceuse-visseuse-18v-batterie-chargeur-boite-carton-makita-ddf482z_SKU747112.html",
    "https://www.manomano.fr/p/makita-ddf482z-18v-lxt-drill-driver-bare-unit-38790699",
    "https://www.maxoutil.com/perceuse-visseuse-18-v-li-ion-o-13-mm-makita-sans-batterie-ni-chargeur-ddf482z.html",
    "https://amzn.to/3XqqV9q",
    "https://www.manomano.fr/p/ryobi-perceuse-visseuse-18v-one-sans-batterie-ni-chargeur-r18dd3-0-40190809",
    "https://www.cdiscount.com/bricolage/outillage/perceuse-visseuse-sans-fil-ryobi-one-r18dd3-0-2/f-166010101-ryo4892210149152.html#mpos=0|cd",
    "https://amzn.to/3GADg47",
    "https://www.sobrico.com/p/bosch-06019h4100-perceuse-visseuse-18v-gsr-18v-28-batterie-chargeur-boite-carton-bosch-06019h4100_SKU780517.html",
    "https://www.manomano.fr/p/bosch-gsr-18v-28-perceuse-visseuse-a-percussion-a-batteries-18v-li-ion-machine-seule-63nm-5484854",
    "https://www.cdiscount.com/bricolage/outillage/perceuse-visseuse-18v-gsr-18v-28-sans-batterie-ni/f-166010101-auc3165140979450.html#desc",
    "https://amzn.to/3EKL8j5",
    "https://www.manomano.fr/p/pack-6-outils-dewalt-dck699m3t-18v-xr-3-x-40ah-li-ion-tstaks-1126212?model_id=55823366&referer",
    "https://amzn.to/3JfFAjD",
    "https://www.manomano.fr/p/pack-perceuse-percussion-dcd796-et-visseuse-a-chocs-dcf887-18v-2x50-ah-dans-coffret-dewalt-dck266p2-qw-22468634?model_id=21200174&referer_id",
    "https://www.bricoprive.com/80335085-les-essentiels-electroportatif-professionnel-dewalt/612796599-pack-2-outils-dewalt-dck266p2-qw-dcd796-dcf887-18v-2-x-5ah-li-ion-5035048488652.html",
    "https://www.racetools.fr/pack-perceuse-visseuse-a-chocs/9170-pack-2-outils-dewalt-dck266p2-qw-dcd796-dcf887-18v-2-x-5ah-li-ion-5035048488652.html?utm_source=idealo&utm_medium=cpc",
    "https://amzn.to/3y2b7im",
    "https://www.sobrico.com/p/makita-dlx4080tx1-pack-4-machines-18v-dga504-ddf482-dhr241-dtd153-3-batteries-bl1850b-5ah-chargeur-sac-transport-makita-dlx4080tx1_SKU744315.html",
    "https://www.manomano.fr/p/pack-4-outils-makita-dlx4050tj-a-batteries-lxt-18v-3-x-50ah-3776415?model_id=3776415&referer_",
    "https://amzn.to/3SP4jOP",
    "https://www.sobrico.com/p/bosch-0601066e00-laser-point-ligne-3x1-5v-gcl-2-15-batterie-chargeur-boite-carton-bosch-0601066e00_SKU576981.html",
    "https://www.manomano.fr/p/laser-gcl-2-15-bosch-point-et-ligne-15-m-0601066e00-58829164?model_id=1233510&referer",
    "https://www.sobrico.com/p/bosch-0601066e00-laser-point-ligne-3x1-5v-gcl-2-15-batterie-chargeur-boite-carton-bosch-0601066e00_SKU576981.html",
    "https://www.racetools.fr/laser-ligne/2668-laser-combine-points-et-lignes-bosch-0601066e00-gcl-2-15-professional-3165140836371.html",
    "https://amzn.to/3y88qMs",
    "https://www.manomano.fr/p/pack-perceuse-visseuse-ryobi-18v-oneplus-r18dd3-252s-meuleuse-115mm-18v-r18ag0-scie-sauteuse-pendulaire-18v-r18js-0-2-batteries-chargeur-rapide-r18ck3c-252s-9538811",
    "https://amzn.to/3XuTanX",
    "https://www.manomano.fr/p/visseuse-a-chocs-ryobi-18v-oneplus-sans-batterie-ni-chargeur-r18id2-0-20490152",
    "https://www.cdiscount.com/auto/outillage-a-main/ryobi-one-visseuse-a-chocs-18-volts-200-nm-h/f-1333303-ryo4892210182746.html#mpos=0|cd",
    "https://amzn.to/3kkW9R2",
    "https://www.sobrico.com/p/bosch-visseuse-chocs-18v-gdr-18v-160-batterie-chargeur-boxx-06019g5104_SKUM73330.html",
    "https://www.cdiscount.com/bricolage/outillage/visseuse-a-choc-sans-fil-gdr-18v-160-sans-batteri/f-166010120-bos3165140921022.html?idOffre=1202230711#mpos=0|mp&sw=033923aa031559fb20d894695b5cc97bd27eeb814f974073c5dde894ce493069ef4c88b30b824aeb4b71f9ddd6efed6fdfc38382f48083ad22b46eef74558649948eb83edbb302d0cc1b32bf64a3d60dedc41f6509a206b2636f86d2151b99cc28ad1fac964cf1a959ab7ecf5fc6147d",
    "https://amzn.to/3IKwn2K",
    "https://www.manomano.fr/p/dewalt-dcf-887-visseuse-a-chocs-sans-fil-18-v-brushless-sans-accessoires-ni-batteries-ni-chargeur-1807430?",
    "https://www.bricoprive.com/80335085-les-essentiels-electroportatif-professionnel-dewalt/612502267-visseuse-a-chocs-dewalt-dcf887n-18-v-li-ion-xr-moteur-sans-charbon-machine-nue-5035048616130.html?queryID=ccd3725bfb58e56c364dbc7ce35adcf3;",
    "https://www.amazon.fr/Makita-DTD152Z-Visseuse-chocs-160/dp/B01861LGA2/ref=sr_1_2?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10EZ5PW431SL6&keywords=dtd152zj&qid=1673533962&sprefix=dtd152zj%2Caps%2C68&sr=8-2",
    "https://www.manomano.fr/p/visseuse-a-chocs-makita-18-v-li-ion-165-nm-sans-batterie-ni-chargeur-avec-coffret-mak-pac-dtd152zj-3292588",
    "https://www.cdiscount.com/bricolage/outillage/visseuse-a-chocs-18-v-li-ion-165-nm-produit-seul/f-166010102-mak0088381802925.html?idOffre=899844594#mpos=0|mp",
    "https://www.maxoutil.com/visseuse-a-chocs-makita-18-v-li-ion-165-nm-sans-batterie-ni-chargeur-avec-coffret-max-pac.html",
    "https://www.bricoprive.com/80212124-les-essentiels-bricolage-grandes-marques/612124914-makita-dtd-152-zj-18v-li-ion-visseuse-a-chocs-sans-fil-avec-boitier-makpac-sans-batterie-ni-chargeur-4250559928713.html?queryID=46fc789de93fa0e7e28723d566a69f40;",
    "https://amzn.to/3iBgMrK",
    "https://www.cdiscount.com/bricolage/outillage/milwaukee-visseuse-a-chocs-1-4-hex-fuel-18v-22/f-166010120-mil4058546220327.html?idOffre=2422357417#mpos=0|mp",
    "https://amzn.to/3KVVTmf",
    "https://www.manomano.fr/p/tondeuse-poussee-ryobi-18v-oneplus-coupe-33-cm-sans-batterie-ni-chargeur-olm1833b-38890812",
    "https://www.cdiscount.com/jardin/outillage-de-jardin/tondeuse-sur-batterie-33cm-de-coupe-ryobi-olm1833b/f-1632601-ryo4892210171948.html",
    "https://amzn.to/3KWMXx9",
    "https://www.manomano.fr/p/tondeuse-36v-2x18v-xpt-makita-sans-batterie-ni-chargeur-dlm382z-34351068",
    "https://www.bricoprive.com/80299955-les-essentiels-makita/612320740-tondeuse-a-gazon-makita-dlm382z-38cm-2x18v-machine-nue-0088381891172.html",
    "https://www.racetools.fr/tondeuse/8690-tondeuse-a-gazon-makita-dlm382z-38cm-2x18v-machine-nue-0088381891172.html",
    "https://amzn.to/41bR26o",
    "https://www.maxoutil.com/tondeuse-xr-2x18v-5ah-li-ion-bl-dewalt-dcmw564p2.html",
    "https://amzn.to/3zVNlpa",
    "https://www.manomano.fr/p/bosch-tondeuse-sans-fil-36v-easyrotak-36-550-2-batteries-de-20ah-36605331",
    "https://www.cdiscount.com/jardin/outillage-de-jardin/tondeuse-a-gazon-sans-fil-bosch-easyrotak-36-550/f-1632601-auc4059952505510.html"

]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
}

# Lire les anciens prix depuis le fichier CSV
old_prices = read_old_prices('liste_de_prod_V1 (1).csv')

# Comparer les anciens prix avec les nouveaux prix
changed_prices = compare_and_save_prices(urls, headers, old_prices)

# Si des prix ont changé, ajouter les informations dans un nouveau fichier CSV
if changed_prices:
    write_new_prices('liste_de_prod_V1 (1).csv', changed_prices)  # Ajoutez cette ligne
    with open('prix_changes.csv', 'w', newline='', encoding='utf-8') as csvfile_changed:
        writer_changed = csv.writer(csvfile_changed)
        # Écrire l'en-tête
        writer_changed.writerow(['url', 'new_price'])
        # Écrire les lignes de données
        for item in changed_prices:
            writer_changed.writerow([item['url'], item['new_price']])
else:
    print("Aucun prix n'a changé.")

# On ouvre le fichier CSV en mode écriture
with open('prices.csv', 'w', newline='', encoding='utf-8') as csvfile:
    # On crée un objet writer pour écrire dans le fichier
    writer = csv.writer(csvfile)
    # On écrit la ligne d'en-tête avec les noms des colonnes
    writer.writerow(['url', 'price'])

    # Boucler sur chaque URL et écrire les données dans le fichier CSV
    for url in urls:
        price = scrape_price(url, headers)
        # Obtenir le nom du site à partir de l'URL

        # On écrit la ligne de données avec l'URL, le prix et le nom du site
        writer.writerow([url, price])

# Boucler sur chaque URL et afficher le prix sur la console python
for url in urls:
    price = scrape_price(url, headers)
    print(f"Le prix du produit sur {url} est {price}")

# Fermer le navigateur web
driver.quit()