
const router = require('express').Router();
const fs = require('fs');

   router.get('api/notes', async(req, res)=>{
            const jsonFile = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
            res.json(jsonFile);
            });

 router.post('api/notes', (req, res)=>{
                const jsonFile = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
                const newJsonFile= {
                    title: req.body.title,
                    text: req.body.text
                }
                
                jsonFile.push(newJsonFile);
                fs.writeFileSync('db/db.json', JSON.stringify(jsonFile));
                res.json(jsonFile);
            })
            
module.exports = router;