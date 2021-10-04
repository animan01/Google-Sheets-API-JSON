# Google Sheets API JSON
Repository example for using Google Sheets as an API (JSON)

# Problem / Motivation
English
-
You can use Google Spreadsheets to do without a backend for your application if you need to store certain data and then use it for your API. All data can be conveniently changed in the Google table and they will be dynamically available in real-time.

Ukrainian
-
Дане рішення підійде для веб сайтів чи застосунків яким потрібні динамічні дані, проте вони не мають можливості розгортати повноцінний бекенд з базою. Всі дані можна зручно змінювати в гугл таблиці і вони будуть динамічно доступні в реальному часі. 

# How to use Google SpreedSheets.
1. Create new Google SpreedSheets.
2. Public your table to all (File > Public On Web).
3. Add table structure (like an Example - https://docs.google.com/spreadsheets/d/15q8896q5FambSL0j9NVwpzRagoN9hKPWrBwO4ph4V30/edit).
4. Go to Tools > Script editor.
5. Copy code from api-example.gs (if you have a structure different from the one in the table, you need to make changes to the field mapping in js) code to your file in Script editor.
6. When you hit the run button for the first time, you will be prompted to authorize the app to run.
7. Make Deploy with Web Application, and you can use this solution (example url - https://script.google.com/macros/s/AKfycbyJMp42_TcJ0w9vhmOmPfazt9nWDnfJpQQdpJk2Z_Dd54U2UaMoij9261IcJwF4iDCl/exec).

# Links

Google Apps scripts documentation - https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app

Google Sheets - https://docs.google.com/spreadsheets/d/e/2PACX-1vRuyjAsFpk4matTzw64SRQxsZb2FKx_dl-R4_OibJdkpgVyfaCH5aCPuGGAul1xRNUbvXx3sdhqd2ml/pubhtml

Google Apps Script: A Beginner’s Guide - https://www.benlcollins.com/apps-script/google-apps-script-beginner-guide/

# Author
Volodymyr Melnychuk

# Proposals
If you have suggestions for improvement, you can create an issue.
