---
title: Was man bei einer Webseiten beachten sollte
category: "Rechtliches"
cover: dsgvo-3583628_640.jpg
author: Goran Strainovic
---

Dieser Artikel soll zur allgemeinen Orientierung für Webdesigner und Webentwickler sowie natürlich auch für jeden interessierten Webseitenbetreiber dienen,
um Webseiten nach aktuell gültigem deutschen und europäischen Recht anzufertigen.

## Disclaimer
Dieser Artikel kann nicht auf Einzelfälle eingehen und stellt **keine Rechtsberatung** dar,
sondern ist lediglich eine Wissenssammlung.
Es basiert auf Artikeln, die sich mit dem Thema auseinander setzen.
Es wird keinerlei Haftung auf die Vollständigkeit und/oder Richtigkeit übernommen. Die Checkliste dient als Hinweis und nicht als Rechtsberatung.

![dsgvo](./dsgvo-3583628_640.jpg)
Bildquelle: 

## Quellen
* https://github.com/mirkoschubert/datenschutz-checkliste
* https://github.com/lukasleitsch/dsgvo-checkliste

## Tools
* https://datenschutz-generator.de/
* https://github.com/mirkoschubert/gdpr-cli
* https://dsgvo-analyse.de

## Empfohlene Massnahmen für alle Webseiten

# Datenschutz-Checkliste (DSGVO) <!-- omit in toc -->

*Open Source Checkliste für Webdesigner und -entwickler, um datenschutz-relevante Aufgaben nach aktuell geltendem Recht umzusetzen.*

## Inhaltsverzeichnis <!-- omit in toc -->

* [Sicherheit](#sicherheit)
  * [SSL/TLS-Transportverschlüsselung Webseite](#ssltls-transportverschlüsselung-webseite)
  * [SSL/TLS-Transportverschlüsselung E-Mail](#ssltls-transportverschlüsselung-e-mail)
  * [Sicherheitskonzept des CMS (z.B. WordPress)](#sicherheitskonzept-des-cms-zb-wordpress)
  * [Sicherheitskonzept des Servers](#sicherheitskonzept-des-servers)
  * [OPTIONAL: Signatur und/ oder Inhaltsverschlüsselung bei E-Mails](#optional-signatur-und-oder-inhaltsverschlüsselung-bei-e-mails)
* [Webhoster](#webhoster)
  * [Access Logs](#access-logs)
  * [Weitere Server Logs](#weitere-server-logs)
  * [Webseiten-Installation](#webseiten-installation)
* [Externe Dienste](#externe-dienste)
  * [Analyse-Tools (z.B. Google Analytics, Matomo/ Piwik, WordPress Stats/ Jetpack)](#analyse-tools-zb-google-analytics-matomo-piwik-wordpress-stats-jetpack)
  * [Marketing-Tools (z.B. Google AdSense/ AdWords, Affiliate-Netzwerke)](#marketing-tools-zb-google-adsense-adwords-affiliate-netzwerke)
  * [Newsletter-Tools (z.B. Mailchimp, Clicktipp, Newsletter2Go, Jetpack Abonnement)](#newsletter-tools-zb-mailchimp-clicktipp-newsletter2go-jetpack-abonnement)
  * [Social Plugins (z.B. Facebook, Instagram, Twitter, Google+)](#social-plugins-zb-facebook-instagram-twitter-google)
  * [Verwertungsgesellschaften (z.B. VG-Wort)](#verwertungsgesellschaften-zb-vg-wort)
  * [Content Delivery Networks (CDN)](#content-delivery-networks-cdn)
  * [Webfonts (z.B. Google Fonts, Adobe Typekit, Fontawesome)](#webfonts-zb-google-fonts-adobe-typekit-fontawesome)
  * [Profile bzw. Profilbilder (z.B. Gravatar, About.me)](#profile-bzw-profilbilder-zb-gravatar-aboutme)
  * [Emojis/ Emoticons (z.B. WP-Emojis)](#emojis-emoticons-zb-wp-emojis)
  * [DNS-Prefetching](#dns-prefetching)
  * [WP-Embeds/ oEmbeds](#wp-embeds-oembeds)
  * [Video- und Musikdienste (z.B. YouTube, Vimeo, Soundcloud)](#video--und-musikdienste-zb-youtube-vimeo-soundcloud)
  * [Kartendienste (z.B. Google Maps, Open Street Maps, Mapbox, Leaflet)](#kartendienste-zb-google-maps-open-street-maps-mapbox-leaflet)
* [Weitere Aspekte](#weitere-aspekte)
  * [Kommentarfunktion](#kommentarfunktion)
  * [Weblinks](#weblinks)
  * [Plugins/ Erweiterungen / Module](#plugins-erweiterungen--module)
  * [Webshop](#webshop)
* [Rechtsdokumente/ Pflichtangaben](#rechtsdokumente-pflichtangaben)
  * [Allgemein](#allgemein)
  * [Impressum](#impressum)
  * [Datenschutzerklärung](#datenschutzerklärung)
  * [Impressum & Datenschutzerklärung bei sozialen Medien](#impressum--datenschutzerklärung-bei-sozialen-medien)
  * [Urheberrecht / Bildnachweise](#urheberrecht--bildnachweise)

## Sicherheit

### SSL/TLS-Transportverschlüsselung Webseite
* Immer HTTPS einsetzen, empfohlen ist das kostenlose Letsencrypt
* Es sollte die gesamte Webseite auf HTTP-Links überprüft werden, damit nicht vor »Mixed Content« gewarnt wird
* Impressum erstellen
* Datenschutz erstellen
* Cookie Dialog, falls Cookies vorhanden
* 301 Weiterleitung einrichten
* Prüfen ob der Anbieter für Formularübermittlung auch HTTPS einsetzt
* Falls Formulare über eigene Email Adresse, dann Emails mit SSL/TLS verschlüsseln
* E-Mails beim Formular-Versand nicht mit der mail()-Funktion von PHP versenden
* Als SPAM-Schutz nur die Honeypot-Methode mit unsichtbaren Formularfelder einsetzen, kein ReCAPTCHA oder
* Um Datendiebstahl / Manipulationen zu vermeiden , möglichst auf wie CMS wie z.B Wordpress verzichten, stattdessen statische Webseiten verwenden
* Falls ein CMS unumgänglich ist, dann

*  Es sollte die gesamte Webseite auf interne HTTP-Links überprüft werden, damit nicht vor »Mixed Content« gewarnt wird.
*  Es sollten auch externe Links auf Erreichbarkeit überprüft werden (Broken Link Checker), da gerade viele auf HTTPS umstellen.
*  Es sollte eine 301-Weiterleitung eingerichtet werden, damit die Webseite nicht über eine verschlüsselte **und** unverschlüsselte Verbindung erreichbar ist.
*  **OPTIONAL**: Es kann HSTS (»HTTP Strict Transport Security«) eingesetzt werden, um Angreifern die Möglichkeit zum »HTTP Downgrading« zu nehmen. Allerdings sollte man darauf hinweisen, dass dies eine **dauerhafte** Einstellung ist und es beim Abschalten dieser Funktion zu massiven Einschränkungen in der Erreichbarkeit führt.

#### Tipps zur Umsetzung <!-- omit in toc -->

* Sofern es der Webhoster (mit automatischer Verlängerung) zulässt, auf »Let's Encrypt«-Zertifikate setzen (kostenlos).
* Für große Firmen mit vielen Subdomains: Lieber kostenpflichtig auf Zertifikate für Wildcard-Domains setzen.
* **WP-Plugin**: Für die Überprüfung und Umstellung der internen Links [Better Search Replace](https://wordpress.org/plugins/better-search-replace/) verwenden.
* Für die (regelmäßige) Überprüfung externer Links (Broken Link Checker) **kein** WP-Plugin verwenden, weil es die Performance stark belastet.
* Weiterleitungen von HTTP auf HTTPS wahlweise per »Force SSL«-Funktion des Hosters (wenn angeboten) oder per `.htaccess` konfigurieren.

### SSL/TLS-Transportverschlüsselung E-Mail

*Rechtsgrundlage*: [Art. 32 Abs. 1 Lit. a DSGVO](https://dsgvo-gesetz.de/art-32-dsgvo/), [§64 Abs. 2, Abs. 3 Nr. 8 BDSG](https://dsgvo-gesetz.de/bdsg/64-bdsg/)<br>
*Legitimierungsgrund E-Mails*: [Art. 6 Abs. 1 Lit. b & f DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/)

*  Auch beim Versand von E-Mails (auch über ein Kontaktformular) sollte Transportverschlüsselung eingesetzt werden. Sie ist dreigeteilt:
  * SSL/TLS-Verschlüsselung der Webseite (siehe oben)
  * SSL/TLS-Verschlüsselung des E-Mail-Postausgangs (SMTP) vom Absender (im Falle eines Formulars ist der Absender auch der Empfänger)
  * SSL/TLS-Verschlüsselung des E-Mail-Posteingangs (POP3/ IMAP4) vom Empfänger
*  Geschäftlichen E-Mail-Verkehr über private Drittanbieter-Konten (z.B. Gmail, GMX, Web.de usw.) vermeiden (da meistens kein AVV möglich)!

#### Tipps zur Umsetzung <!-- omit in toc -->

* Darauf achten, dass E-Mails beim Formular-Versand **nicht** mit der `mail()`-Funktion von PHP versendet werden!
* Darauf achten, dass ein mgl. Plugin die SMTP-Verschlüsselung überhaupt vorsieht.
* **OPTIONAL**: Auch für einen geeigneten SPAM-Schutz (vorzugsweise Honeypot-Methode, reCaptchas sind **nicht** DSGVO-konform!) sorgen.
* **WP-Plugin**: Wenn es nur um ein einzelnes Kontaktformular geht, **nicht** große Formbuilder wie CF7 einsetzen (Performance). Hier empfehle ich mein eigenes: [Minimal Contact Form](https://wordpress.org/plugins/minimal-contact-form/) (SSL-Verschlüsselung noch in Arbeit)
* Ggf. E-Mail-Konto auf eigenen Hoster legen.

### Sicherheitskonzept des CMS (z.B. WordPress)

*Rechtsgrundlage*: [Art. 32 DSGVO](https://dsgvo-gesetz.de/art-32-dsgvo/)

*  Für den Schutz vor Brute-Force- und Wörterbuch-Attacken reicht ein einfacher Schutz, der die Anzahl der falschen Eingaben begrenzt.
*  Für den Schutz vor Kommentar-SPAM reicht ein einfacher Schutz, vorzugsweise per Honeypot-Methode (reCaptcha nicht DSGVO-konform!).
*  Auf All-In-One Sicherheits-Plugins wie *iThemes Security* oder *WordFence* verzichten (Sicherheitslücken!).
*  Für den Schutz vor Sicherheitslücken CMS-Installation, Plugins, Module und Themes (auch nicht aktivierte) **immer** aktuell halten!
*  Für den Schutz vor Sicherheitslücken **so wenig** Plugins/ Themes wie nur möglich installieren!

#### Tipps zur Umsetzung <!-- omit in toc -->

* **WP-Plugin**: Brute-Force-Attacken - [Limit Login Attempts Reloaded](https://wordpress.org/plugins/limit-login-attempts-reloaded/)
* **WP-Plugin**: Kommentar-SPAM - [Antispam Bee](https://wordpress.org/plugins/antispam-bee/)
* **WP-spezifisch**: Infos zu Sicherheitslücken im WordPress Core, Plugins und Themes gibt es [hier](https://www.wpvulndb.com)

### Sicherheitskonzept des Servers

*Rechtsgrundlage*: [Art. 28 Abs. 3 Lit. c DSGVO](https://dsgvo-gesetz.de/art-28-dsgvo/), [Art. 29 DSGVO](https://dsgvo-gesetz.de/art-29-dsgvo/), [Art. 32 DSGVO](https://dsgvo-gesetz.de/art-32-dsgvo/)

*  Bei Shared Hosting oder Managed Servern liegt die Verantwortung voll beim Webhoster (Auskunft anfordern/ AVV lesen).
*  Bei VPS und dedizierten Servern liegt die Verantwortung teilweise auch beim Inhaber (Auskunft anfordern).

### OPTIONAL: Signatur und/ oder Inhaltsverschlüsselung bei E-Mails

*Rechtsgrundlage*: [Art. 32 DSGVO](https://dsgvo-gesetz.de/art-32-dsgvo/)

*  Eine elektronische Signatur fördert die Nachweisbarkeit des Absenders.
*  Eine Inhaltsverschlüsselung verhindert das Lesen des Inhalts der E-Mail bei einer MitM-Attacke (»Man in the Middle«).

#### Tipps zur Umsetzung <!-- omit in toc -->

* Im wesentlichen gibt es zwei populäre Signatur- und Verschlüsselungsverfahren:
  * S/MIME - über ein E-Mail-Zertifikat
  * PGP (kostenplichtig) bzw. GnuPGP (Open Source) - über ein Schlüsselpaar
* PGP/ GPG ist immer den Vorzug zu geben!
* Kostenlose S/MIME-E-Mail-Zertifikate gibt es bei [Comodo](https://www.comodo.com/home/email-security/free-email-certificate.php) für jeweils ein Jahr.
* Für das kostenlose GPG gibt es verschiedene Lösungen, die auf der offiziellen [Webseite](https://gnupg.org) erhältlich sind.
* Für die Signatur braucht nur der Absender die Einrichtung, für die Verschlüsselung sowohl Absender als auch Empfänger.

## Webhoster

### Access Logs

*Rechtsgrundlage*: [Art. 28 DSGVO](https://dsgvo-gesetz.de/art-28-dsgvo/), [Art. 29 DSGVO](https://dsgvo-gesetz.de/art-29-dsgvo/), [Art. 32 Abs. 1 Lit. a DSGVO](https://dsgvo-gesetz.de/art-32-dsgvo/)<br>
*Legitimierungsgrund*: [Art. 6 Abs. 1 Lit. f DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/)

*  In den Access Logs des Servers gespeicherte personenbezogene Daten (insbes. die IP-Adresse) sollten nach Möglichkeit pseudonymisiert werden.
*  Alternativ kann natürlich im Zuge der Datensparsamkeit komplett auf die Speicherung der IP-Adresse (sofern vom Webhoster zugelassen) verzichtet werden.
*  Auch die Speicherdauer sollte wenn möglich auf 7 - 14 Tage verkürzt werden.

#### Tipps zur Umsetzung <!-- omit in toc -->

* Fast jeder Hoster bietet inzwischen die Pseudonymisierung von IP-Adressen (Kürzung des letzten Bytes, z.B. 192.168.10.X) an.
* Bei vielen Hostern ist auch die Speicherdauer einzuschränken - oder sie wurde zur DSGVO-Umstellung automatisch verkürzt (im Zweifelsfall beim Webhoster anfragen).

### Weitere Server Logs

*Rechtsgrundlage*: [Art. 28 DSGVO](https://dsgvo-gesetz.de/art-28-dsgvo/), [Art. 29 DSGVO](https://dsgvo-gesetz.de/art-29-dsgvo/)<br>
*Legitimierungsgrund*: [Art. 6 Abs. 1 Lit. c DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/)

*  Der Webhoster ist auch immer dazu verpflichtet, weitere Server Logs zu (insbes. zur Früherkennung von nicht authorisierten Zugriffen, Schadcode und allgemeinen Fehlermeldungen) führen, die ebenfalls IP-Adressen speichern. Hier ist eine Kürzung nicht vorgesehen.

#### Tipps zur Umsetzung <!-- omit in toc -->

* Auskunft über die Speicherung und Speicherdauer beim Hoster einholen (oder im AVV nachschlagen).

### Webseiten-Installation

*  Alle auf dem Server gespeicherten personenbezogenen Daten gelten auch als »Verarbeitung« - Auftragsverarbeitungsvertrag (AVV) mit Webhoster abschließen!

## Externe Dienste

### Analyse-Tools (z.B. Google Analytics, Matomo/ Piwik, WordPress Stats/ Jetpack)

*Rechtsgrundlage*: [Art. 7 DSGVO](https://dsgvo-gesetz.de/art-7-dsgvo/), [Art. 28 DSGVO](https://dsgvo-gesetz.de/art-28-dsgvo/), [Art. 44 ff. DSGVO](https://dsgvo-gesetz.de/art-44-dsgvo/)<br>
*Legitimierungsgrund*: [Art. 6 Abs. 1 Lit. a oder f DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/)

*  Abwägen, welches Analysetool unter der Berücksichtigung des Datensparsamkeits-Prinzips geeignet erscheint.
*  Abwägen, ob ein Verarbeitungsgrund nach Art. 6 Abs. 1 lit. b) - f) DSGVO vorliegt oder nach Art. 6 Abs. 1 lit. a) ein vorheriges Einverständnis eingeholt werden sollte.
*  Sofern Cookies gespeichert werden, über einen Cookie-Banner darüber informieren und Opt-Out-Funktion bereit stellen.
*  Altdaten, die die maximale Verarbeitungszeit überschreiten, müssen händisch gelöscht werden.
*  **Google Analytics**: AVV abschließen, minimale Verarbeitungszeit (14 Monate) einstellen, Targeting-Funktionen ausstellen, IP-Adressen pseudonymisieren
*  **Matomo/ Piwik**: AVV mit Webhoster abschließen, IP-Adressen pseudonymisieren, Speicherdauer einstellen
*  **Webalizer**: AVV mit Webhoster abschließen, IP-Adressen in den Server Logs pseudonymisieren
*  **WP Stats/ Jetpack**: Da es derzeit keinen AVV für Jetpack gibt, das Plugin vollkommen abschalten!

#### Tipps zur Umsetzung <!-- omit in toc -->

* AVV bei Google Analytics braucht **nicht mehr** schriftlich erfolgen - mit wenigen Klicks abschließbar
* Einbindung von GA oder Matomo nach Möglichkeit per Plugin, um Fehler zu vermeiden
* Beim Cookie-Banner reicht derzeit die Opt-Out-Methode, da die DSGVO nicht explizit Cookies regelt. Das Opt-In wird derzeit im Allgemeinen recht kritisch betrachtet.
* **WP-Plugin**: [Borlabs Cookie](https://de.borlabs.io/borlabs-cookie/) (Cookie-Banner & 2-Klick-Lösungen, kostenpflichtig) oder [Google Analytics Germanized](https://wordpress.org/plugins/ga-germanized/) (GA-Einbindung, Cookie-Banner & DNT, kostenlos)
* **WP-Plugin**: Alternativ [Statify](https://wordpress.org/plugins/statify/) einsetzen - trackt nur Page Impressions und ist vollkommen DSGVO-konform.

### Marketing-Tools (z.B. Google AdSense/ AdWords, Affiliate-Netzwerke)

*Rechtsgrundlage*: [Art. 7 DSGVO](https://dsgvo-gesetz.de/art-7-dsgvo/), [Art. 28 DSGVO](https://dsgvo-gesetz.de/art-28-dsgvo/), [Art. 44 ff. DSGVO](https://dsgvo-gesetz.de/art-44-dsgvo/), [§6 TMG](https://dejure.org/gesetze/TMG/6.html), [§ 58 RStV](http://www.gesetze-bayern.de/Content/Document/RFunkStVertr-58)<br>
*Legitimierungsgrund*: [Art. 6 Abs. 1 Lit. a oder f DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/)

*  Google AdSense verlangt derzeit das vorherige Einverständnis (Opt-In) lt. [Programmrichtlinien](https://support.google.com/adsense/answer/48182?hl=de), nicht nur für die Cookies und Beacons (Zählpixel), sondern auch für die Übertragung jeglicher personenbezogenen Daten.
*  Funktionen wie Remarketing oder die Auslieferung von personenbezogener Werbung sind derzeit fraglich und sollten - zumindest vorübergehend - abgeschaltet werden.
*  Richtlinien bzw. AGBs bei sämtlichen Affiliate-Netzwerken beachten!
*  Widgets, grafische Einbettungen oder JavaScript-Einbettungen von Werbemitteln von Affiliate-Netzwerken mindestens in der DSE erwähnen (sicherer: 2-Klick-Lösung)
*  Werbemittel in jeglicher Form sollten als »Werbung« oder »Anzeige« gekennzeichnet werden!

#### Tipps zur Umsetzung <!-- omit in toc -->

* **WP-Plugin**: Für Google AdSense [Advanced Ads](https://wordpress.org/plugins/advanced-ads/) mit GDPR-Funktion (2-Klick-Lösung) einsetzen.
* Bei Affiliate-Netzwerken vorübergehend nur auf (für die DSGVO nicht relevante) Text-Links setzen.

### Newsletter-Tools (z.B. Mailchimp, Clicktipp, Newsletter2Go, Jetpack Abonnement)

*Rechtsgrundlage*: [Art. 7 DSGVO](https://dsgvo-gesetz.de/art-7-dsgvo/), [Art. 28 DSGVO](https://dsgvo-gesetz.de/art-28-dsgvo/), [Art. 44 ff. DSGVO](https://dsgvo-gesetz.de/art-44-dsgvo/)<br>
*Legitimierungsgrund*: [Art. 6 Abs. 1 Lit. a DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/)

*  Newsletter-Formulare sollten mit einem adäquaten Hinweistext versehen und in der E-Mail beim Double-Opt-In-Verfahren wiederholt werden.
*  Drittanbieter nicht-europäischen Ländern sollten auf die Mitgliedschaft beim [Privacy Shield](https://www.privacyshield.gov/list) überprüft oder ggf. gemieden werden.
*  Ein Newsletter-Eintrag sollte nicht an eine (kostenlosen oder kostenpflichtigen) Dienstleistung gekoppelt werden (»Kopplungsverbot«)
*  Das Einverständnis für Newsletter-Einträge muss dokumentiert (Hinweistext, Zeitpunkt) und es muss ein Opt-Out bereit gestellt werden.

#### Tipps zur Umsetzung <!-- omit in toc -->

* **Kopplungsverbot**: Ein angebotenes Freebie darf **nicht** von der Zustimmung zur Erhebung personenbezogener Daten abhängig gemacht werden. »Als Dankeschön erhalten Sie [...]« wäre aber machbar.
* AVV mit dem Drittanbieter abschließen
* **Sicherste Methode**: Auf Drittanbieter verzichten und auf stationäre Lösungen wie dem **WP-Plugin** [Newsletter](https://wordpress.org/plugins/newsletter/) setzen.

### Social Plugins (z.B. Facebook, Instagram, Twitter, Google+)

*Rechtsgrundlage*: [Art. 7 DSGVO](https://dsgvo-gesetz.de/art-7-dsgvo/), [Art. 22 DSGVO](https://dsgvo-gesetz.de/art-22-dsgvo/), [Art. 44 ff. DSGVO](https://dsgvo-gesetz.de/art-44-dsgvo/)<br>
*Legitimierungsgrund*: [Art. 6 Abs. 1 Lit. a oder f DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/)<br>
*Urteile*: [LG Düsseldorf, Az. 12 O 151/15](https://dejure.org/dienste/vernetzung/rechtsprechung?Text=12%20O%20151/15)

*  Sämtliche eingebundene Social Plugins laden personenbezogene Daten bereits beim Besuch der Webseite. Sofern der Nutzer im sozialen Netzwerk eingeloggt ist, erfolgt eine genaue Zuordnung sowie eine Art »Bewegungsprofil« über alle mit Social Plugins versehenen Webseiten.
*  Bei Login-Verfahren (z.B. Facebook Connect) und Kommentarfunktionen mit Verknüpfung zu sozialen Netzen wird ebenso verfahren.
*  Sharing-Buttons, die die Anzahl der Shares anzeigen, haben das gleiche Problem.
*  Einzig reine Links (Text oder Grafik) sind DSGVO-konform.
*  Beacons (Zählpixel) für Statistik-Zwecke sind ebenfalls sehr kritisch zu bewerten.

#### Tipps zur Umsetzung <!-- omit in toc -->

* Vor dem Laden des Social Plugins über die Datenverarbeitung informieren (2-Klick-Lösung) oder Social Plugins komplett abschalten.
* Facebook Connect, Jetpack Kommentarfunktion (und ähnliche) komplett abschalten.
* Sharing-Buttons entweder ohne Kennzahlen anzeigen oder das **WP-Plugin** [Shariff](https://wordpress.org/plugins/shariff/) verwenden.
* Beacons (Zählpixel) komplett entfernen.

### Verwertungsgesellschaften (z.B. VG-Wort)

*Rechtsgrundlage*: [Art. 32 Abs. 1 Lit. a DSGVO](https://dsgvo-gesetz.de/art-32-dsgvo/)<br>
*Legitimierungsgrund*: [Art. 6 Abs. 1 Lit. b DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/), [Art. 6 Abs. 1 Lit. c DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/) im Einklang mit [§32 UrgH](https://dejure.org/gesetze/UrhG/32.html)

*  Der Zählpixel der VG-Wort sollte auf HTTPS umgestellt werden, um »mixed Content« zu vermeiden.
*  Der Zählpixel der VG-WOrt sollte in der Datenschutzerklärung erwähnt werden.

### Content Delivery Networks (CDN)

*Rechtsgrundlage*: [Art. 44 ff. DSGVO](https://dsgvo-gesetz.de/art-44-dsgvo/)<br>
*Legitimierungsgrund*: evtl. [Art. 6 Abs. 1 Lit. f DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/)

*  CDNs (z.B. Google Fonts, Adobe Typekit, Bootstrap/ Fontawesome, CDNJS/ Cloudflare, Jetpack usw.) können durchaus als kritisch betrachtet werden, da die Inhalte auf Server der ganzen Welt verteilt werden und potentiell beim Abruf mindestens die IP-Adresse gespeichert wird.
*  Bei CDNs sollte abgewogen werden, ob diese überhaupt notwendig sind (z.B. Zielgruppe ausschließlich D-A-CH).
*  Inhalte von CDNs (z.B. Bilder, Fonts, CSS- oder JS- Dateien) sollten nach Möglichkeit lokalisiert werden.

#### Tipps zur Umsetzung <!-- omit in toc -->

* Von CDNs geladene Dateien (Fonts, CSS, JS usw.) insbesondere bei rein deutschsprachigen Seiten **immer** lokalisieren. Diese können direkt im (Child-)Theme abgelegt werden.
* Auch prüfen, ob es nicht WordPress-eigene Alternativen gibt (z.B. jQuery).
* Auch Drittanbieter-Plugins auf CDNs prüfen.
* Abwägung zwischen Notwendigkeit und Risiko im besonderen Fall (z.B. Instagram-Widget bei Fotografen)

### Webfonts (z.B. Google Fonts, Adobe Typekit, Fontawesome)

*Rechtsgrundlage*: [Art. 44 ff. DSGVO](https://dsgvo-gesetz.de/art-44-dsgvo/)<br>
*Legitimierungsgrund*: evtl. [Art. 6 Abs. 1 Lit. f DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/)

*  Google Fonts, Adobe Typekit- und Fontaweome-Fonts (BootstrapCDN) sollten **immer** lokalisiert werden (siehe CDNs)!
*  Fonts könnten unter Umständen auch gegen andere lokale Open-Source-Fonts oder sogar dem CSS Font Stack ersetzt werden.

#### Tipps zur Umsetzung <!-- omit in toc -->

* Google Fonts über den [Google Webfonts Helper](https://google-webfonts-helper.herokuapp.com/fonts) im (Child-)Theme lokalisieren.
* Wenn nötig, [CSS Font Stack](https://www.cssfontstack.com) einsetzen.
* Wer das **WP-Plugin** [Autoptimize](https://wordpress.org/plugins/autoptimize/) einsetzt, kann auch dort Google Fonts abschalten (funktioniert allerdings nicht immer).

### Profile bzw. Profilbilder (z.B. Gravatar, About.me)

*Rechtsgrundlage*: [Art. 44 ff. DSGVO](https://dsgvo-gesetz.de/art-44-dsgvo/), [§22 KunstUrhG](https://dejure.org/gesetze/KunstUrhG/22.html)<br>
*Legitimierungsgrund*: evtl. [Art. 6 Abs. 1 Lit. f DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/)

*  Profile und/ oder Avatarbilder sollten nach Möglichkeit lokalisiert oder abgeschaltet werden, da sie mit Sicherheit personenbezogene Daten enthalten.
*  Die in WordPress fest integrierte Gravatar-Funktion sollte nicht nur wegen den Bildern, sondern auch in den im Bild-Link als Hash abgelegten E-Mail-Adressen komplett abgeschaltet werden.

#### Tipps zur Umsetzung <!-- omit in toc -->

* Die Gravatarfunktion lässt sich direkt in WordPress unter »Einstellungen > Diskussion > Avatare anzeigen« abschalten.

### Emojis/ Emoticons (z.B. WP-Emojis)

*Rechtsgrundlage*: [Art. 22 DSGVO](https://dsgvo-gesetz.de/art-22-dsgvo/), [Art. 44 ff. DSGVO](https://dsgvo-gesetz.de/art-44-dsgvo/)<br>
*Legitimierungsgrund*: evtl. [Art. 6 Abs. 1 Lit. f DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/)

*  Wenn Emojis extern von einem CDN geladen werden, werden für gewöhnlich IP-Adressen beim Abruf abgerufen.
*  Speziell bei den **WP-Emojis** wird zusätzlich [Canvas Fingerprinting](https://de.wikipedia.org/wiki/Canvas_Fingerprinting) eingesetzt, was eine Zuordnung des Rechners ohne Speicherung von Cookies ermöglicht (auch, wenn keine Emojis angezeigt werden).
*  **WP-Emojis** sollte daher immer abgeschaltet werden! Jeder moderne Browser zeigt trotzdem weiter Emojis und Emoticons an.

#### Tipps zur Umsetzung <!-- omit in toc -->

* Sofern der Webseitenbetreiber WordPress bereits **vor** Version 4.4 installiert hat, gibt es unter »Einstellungen > Diskussion« die Möglichkeit, die WP-Emojis direkt abzuschalten.
* Jüngere Webseiten haben diese Funktion nicht - hier sollten die Emojis (zzgl. DNS-Prefetching) über die `functions.php` des (Child-)Themes abgeschaltet werden.
* Wer das **WP-Plugin** [Autoptimize](https://wordpress.org/plugins/autoptimize/) einsetzt, kann auch dort die Emojis abschalten (funktioniert allerdings nicht immer).

### DNS-Prefetching

*Rechtsgrundlage*: [Art. 44 ff. DSGVO](https://dsgvo-gesetz.de/art-44-dsgvo/)<br>
*Legitimierungsgrund*: evtl. [Art. 6 Abs. 1 Lit. f DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/)

*  Beim DNS-Prefetching wird bereits beim Laden der Webseite der Browser angewiesen, beim Name Server weitere Domains aufzulösen. Dies zieht natürlich auch die Speicherung der IP-Adresse beim Name Server nach sich. Da diese Anfragen häufig nicht zwingend erforderlich sind, **könnte** auch hier ein Verstoß gegen die DSGVO vorliegen.
*  Bei WordPress werden die meisten Prefetching-Tags bereits mit dem Entfernen der entsprechenden Funktion (z.B. Google Fonts, WP-Emojis, Jetpack) entfernt.
*  Mindestens ein Eintrag (von WordPress selbst) bleibt aber erhalten und muss manuell entfernt werden.

#### Tipps zur Umsetzung <!-- omit in toc -->

* Darauf achten, dass beim Entfernen von WP-Emojis auch das Prefetching entfernt wird.
* Den WordPress-eigenen Eintrag über die `functions.php` des (Child-)Themes entfernen.

### WP-Embeds/ oEmbeds

*Rechtsgrundlage*: [Art. 22 DSGVO](https://dsgvo-gesetz.de/art-22-dsgvo/), [Art. 44 ff. DSGVO](https://dsgvo-gesetz.de/art-44-dsgvo/)<br>
*Legitimierungsgrund*: evtl. [Art. 6 Abs. 1 Lit. f DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/)

*  Wenn man bestimmte Links aus derzeit 34 Quellen (z.B. WordPress-Blogs, YouTube-Videos usw.) in den visuellen Editor in WordPress einfügt, werden sie automatisch in so genannte oEmbeds umgewandelt. Dabei werden Teile der Zielwebseite per `iframe` in die Webseite grafisch aufgearbeitet geladen. Beim Laden der Webseite werden damit automatisch alle Inhalte des iFrames mitgeladen (z.B. Analytics-Tools, Zählpixel).
*  Sofern in den Posts, Seiten oder Kommentaren solche oEmbeds auftauchen, sollte die Funktion vollständig deaktiviert werden.
*  Alte Einträge werden **nicht** vollständig entfernt und müssen händisch gelöscht werden.

#### Tipps zur Umsetzung <!-- omit in toc -->

* Nähere Informationen zu den WP-Embeds gibt es [hier](https://codex.wordpress.org/Embeds).
* oEmbeds kann man vermeiden, indem man Links in den Text-Editor von WordPress eingibt oder eigene Shortcodes verwendet.
* Die gesamte Webseite (jede Unterseite) sollte auf iFrames getestet werden.
* Bei positiven Ergebnissen sollte die oEmbed-Funktion über die `functions.php` des Child Themes komplett entfernt werden.
* Alte Einträge müssen danach noch händisch gelöscht bzw. wieder zu normalen Links konvertiert werden.

### Video- und Musikdienste (z.B. YouTube, Vimeo, Soundcloud)

*  Einbettungen von sämtlichen Video- und Musikdiensten übertragen bereits beim Laden der Webseite personenbezogene Daten und müssen deshalb über eine 2-Klick-Lösung verfügen. Zudem werden häufig auch Cookies gespeichert.
*  YouTube-Videos können in einen »Erweiterten Datenschutzmodus« geschaltet werden, was aber nur die Speicherung von Cookies verhindert.
*  Vimeo hingegen ist noch nicht einmal im *Privacy Shield* eingetragen.
*  SoundCloud hat zwar ihre Datenschutz-Einstellungen verbessert, erfordert aber dennoch eine 2-Klick-Lösung.

#### Tipps zur Umsetzung <!-- omit in toc -->

* YouTube-Videos sollten nur im »Erweiterten Datenschutzmodus« erfolgen.
* **Einfachste Lösung**: Video-Vorschauen manuell als Bild einbetten und auf die jeweiligen Plattformen verlinken
* 2-Klick-Lösung für YouTube-Videos mit [WP YouTube Lyte](https://wordpress.org/plugins/wp-youtube-lyte/)
* 2-Klick-Lösung für YouTube- und Vimeo-Videos als Lightbox mit [Responsive YouTube & Vimeo Video Popup](https://wordpress.org/plugins/responsive-youtube-vimeo-popup/)

### Kartendienste (z.B. Google Maps, Open Street Maps, Mapbox, Leaflet)

*  Ebenso wie Video- und Musikdienste werden auch bei Kartendiensten bereits beim Laden der Webseite personenbezogene Daten erhoben. Auch hier bleibt derzeit nur eine 2-Klick-Lösung.

#### Tipps zur Umsetzung <!-- omit in toc -->

* **Einfachste Lösung**: Kartenausschnitt manuell als Bild einbetten und auf die jeweilige Plattform verlinken.

## Weitere Aspekte

### Kommentarfunktion

*  Die Speicherung von IP-Adressen in der Kommentarfunktion sollte auf einen minimalen Zeitraum begrenzt (z.B. bis zur Freischaltung zur rechtlichen Absicherung) oder alternativ deaktiviert werden.
*  Vor dem Absenden eines Kommentars (oder jedes anderen Formulars) sollte auf die Speicherung personenbezogenen Daten hingewiesen werden (Opt-In kritisch!).
*  Die Option zum Speichern eines Cookies für das Merken von Name und E-Mail-Adresse sollte abgeschaltet werden (bei WordPress in Arbeit, vgl. [#44373](https://core.trac.wordpress.org/ticket/44373)).

#### Tipps zur Umsetzung <!-- omit in toc -->

* IP-Adressen vor Freischaltung händisch löschen oder per die Speicherung im (Child-)Theme via `functions.php` ausschließen.
* Hinweistext einfügen - am besten im (Child-)Theme in der `comments.php` oder als Option.

### Weblinks

*  Weblinks zu externen Webseiten sind erst einmal unkritisch. Dennoch sollte in der Datenschutzerklärung darauf hingewiesen werden, dass beim Verlassen der Webseite über einen Link auf der Zielwebseite weitere personenbezogene Daten erhoben werden können.

### Plugins/ Erweiterungen / Module

*  Plugins sollte genaustens überprüft werden, ob und wie personenbezogene Daten erhoben werden (für WordPress vgl. auch [Blogmojo](https://www.blogmojo.de/wordpress-plugins-dsgvo/)).

### Webshop

*  Bei Webshops macht es Sinn, sich das Einverständnis zur Datenerhebung bzw. -verarbeitung zu holen. Es dürfte aber ausreichen, wie bisher ein gemeinsames Häkchen für »ich habe die Allgemeinen Geschäftsbedingungen, die Widerrufsbelehrung und die Datenschutzerklärung gelesen« inkl. entsprechender Verlinkung vor dem »kostenpflichtig kaufen«-Button einzurichten.
*  Bei externen Shop-Lösungen und/ oder externen Zahlungsanbietern sollte **immer** ein Auftragsverarbeitungsvertrag (AVV) abgeschlossen werden.
*  Auch die statistische Erhebung des Kaufverhaltens sollte vertraglich geregelt sein (vgl. Analysetools & Marketingtools)

## Rechtsdokumente/ Pflichtangaben

### Allgemein

*  Impressum und Datenschutzerklärung sollten gut sichtbar von jeder Unterseite der Webseite erreichbar sein (gängige Praxis: im Footer-Menü)!
*  Impressum und Datenschutzerklärung sollten auf zwei Unterseiten getrennt zugänglich sein.
*  Sobald Pflichtangaben (z.B. durch einen Cookie-Banner) verdeckt werden, werden sie als »nicht existent« behandelt.
*  Auch eine »weiße Seite« bzw. Baustellen-Seite erfordert in aller Regel diese Pflichtangaben!
*  Auch **frei zugängliche** Login- und Registrierungs-Seiten müssen diese Pflichtangaben enthalten.

### Impressum

*  Das Impressum sollte von jeder Unterseite der Webseite aus über maximal 2 Klicks (z.B. »Kontakt« - »Impressum«) erreichbar sein.
*  Das Impressum sollte alle Pflichtangaben gemäß §5 TMG enthalten, dazu gehören (nicht abschließend):
  * Vor- und Zuname oder Firmenname und Geschäftsform sowie ggf. Inhaber
  * Anschrift
  * Telefonnummer
  * E-Mail-Adresse
  * USt-ID (oder Hinweis auf Befreiung)
  * Aktuelles Eigenkapital (bei GmbH)
  * Eintrag des Handelsregisters (wenn vorhanden)
*  Sollte die Webseite journalistisch-redaktionelle Inhalte enthalten (z.B. bei einem Weblog), muss auch nach §55 Abs. 2 RStV ein inhaltlich Veranwortlicher mit Name und Adresse angegeben werden.
*  Online-Händler müssen zwingend einen Link zur Streitschlichtungsstelle der EU setzen
*  Das Impressum muss barrierefrei sein! Anschrift, Telefonnummer oder Mail-Adresse als Bild oder in kodierter Form sind **nicht** zulässig!
*  Haftungsausschlüsse/ Disclaimer zu Links und Inhalt gehören **nicht** (in verallgemeinerter Form) ins Impressum!
*  Wer es noch nicht verstanden hat: »Das LG Hamburg hat 1998 entschieden...« ist Blödsinn und kann sogar zu Abmahnungen führen!
*  »Keine Abmahnung ohne vorherigen Kontakt« entfaltet keine Wirkung!
*  Ein Hinweis auf das eigene Urheberrecht kann gemacht werden, ist aber in Deutschland nicht zwingend notwendig.
*  Das Impressum ist auch ein schöner Ort, um auf Miturheber wie den Designer, Webentwickler, Font-Ersteller usw. hinzuweisen.
*  Bildnachweise gehören nur dann ins Impressum, wenn sie allgemeingültig für die ganze Webseite sind! (»Sofern nicht anders angegeben...«)

### Datenschutzerklärung

*  Die Datenschutzerklärung (DSE) sollte von jeder Unterseite aus in einem Klick (evtl. auch in 2 Klicks, vgl. Impressum) erreichbar sein.
*  Die DSE sollte ausführlich, aber verständlich und durch Rechtsgrundlagen der DSGVO und des BDSG-neu belegt sein.
*  Die DSE sollte einen Gültigkeitsbereich (z.B. auch andere benannte Webseiten und soziale Medien) sowie ein Aktualisierungdatum enthalten.
*  Die DSE kann durch einen (kostenlosen oder kostenpflichtigen) Generator oder direkt durch einen Anwalt oder Datenschutzbeauftragten erstellt werden.
*  Für Presseerzeugnisse/ journalistische Zwecke weichen die Vorgaben zur Datenverarbeitung sowie die Informationspflichten lt. §57 RStV (des Bundeslandes) im Einlklang mit Art. 85 DSGVO ab (»Medienprivileg«).

#### Tipps zur Umsetzung <!-- omit in toc -->

* Kostenlos für Privatpersonen und Kleinunternehmer ist der [Datenschutz-Generator des RA Dr. Schwenke](https://datenschutz-generator.de) zu empfehlen.


### Impressum & Datenschutzerklärung bei sozialen Medien

*  Auch in den sozialen Medien ist Impressum & Datenschutzerklärung anzugeben.
*  Zudem ist in der DSE die DSE des Drittanbieters zu nennen.
*  Bei Facebook-Seiten gibt  mittlerweise zwei Einträge, die man mit Links zum Impressum & der DSE der eigenen Webseite füllen kann.
*  Wo keine direkte Möglichkeit ist, die entsprechenden Links einzutragen, kann mit Short-URLs (**ohne** Tracking!) in den jeweiligen Beschreibungen gearbeitet werden.

### Urheberrecht / Bildnachweise

*  Beim Verwenden fremder Werke (Bilder, Grafiken, Musik, Videos, Texte, Software, Code) **immer** die dazu gehörigen Lizenzbestimmungen lesen und ggf. laut Vorgaben entsprechende Angaben zum Urheber machen!
*  Der Bildnachweis gehört **immer** direkt unter das Bild! Manche Stock-Agenturen verlagen sogar, den Bildnachweis **im** Bild anzubringen. Einzige Ausnahme (weil gängige Praxis): Bilder, die unter der entsprechenden freien Lizenz (z.B. CC0) **ohne Namensnennung** auskommen und sich über die gesamte Webseite erstrecken, können auch einmalig im benannt werden.
*  Webdesigner/ -entwickler sollten das vom Kunden zur Verfügung gestellte Bildmaterial auf Urheberrechtsverstöße überprüfen (vgl. LG Bochum, Az. 9 S 17/16)
*  Bilder (und andere fremde Werke) dürfen ohne entsprechenden Verwertungsrechten auch nicht bearbeitet werden!
*  Metadaten (EXIF, IPTC, Wasserzeichen) dürfen aus **fremden** Bildern ohne entsprechende Einwilligung des Urhebers **nicht** entfernt werden (Bildbearbeitung & Aberkennung der Urheberschaft)!

