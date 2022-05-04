# Deployment Steps

-   Run: `npm run build`
-   Zip build directory: `zip -r build.zip build`, remove any older `rm build.zip` before running the command.
-   Upload zip files to brca folder on IITD server: `scp build.zip brcagsec@brca.iitd.ac.in:/var/www/brca/http/`
-   Log in to server: `ssh brcagsec@brca.iitd.ac.in`
-   Go to webserver directory: `cd /var/www/brca/http/` and `unzip build.zip`
-   This will create a new build directory on server. Remove: `rm build.zip`
-   Archive older website `mv html archive-old`. You can keep any name other than `archive-old` but make sure there aren't a lot of archives as the disk space on server is limited.
-   Make new frontend available: `mv build html`.
