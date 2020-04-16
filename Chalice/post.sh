export URL=`chalice url`

export PIC='wuhan.jpg'


(echo -n '{"data": "'; base64 $PIC; echo '", "topk": 1}') |
curl -H "Content-Type: application/json" -d @-  $URL

# echo

# (echo -n '{"data": "'; base64 $PIC; echo '"}') |
# curl -H "Content-Type: application/json" -d @-  $URL

# echo

# (echo -n '{"data": "'; base64 $PIC; echo '"}') |
# curl -H "Content-Type: application/json" -d @-  $URL