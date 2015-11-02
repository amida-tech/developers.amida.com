#cleanup
rm -r _site
#rm -r _raw

mkdir _site
mkdir _site/models
#mkdir _site/apis

#mkdir _raw
#mkdir _raw/models

#generate model docs
node model.js

#generate top level files
node index.js

#generate api docs from markdown
#node apis.js
mkdir _site/api
cp -r _templates/api _site/

cp _site/models/*.html _site/

rm -r _site/models

cp _templates/*.png _site/
cp _templates/index.html _site/