from chalice import Chalice
from chalice import BadRequestError
import base64, os, boto3, ast
import json
import numpy as np
import PIL



app = Chalice(app_name='fidusfin')
app.debug = True



@app.route('/', methods=['POST'])
def index():
    body = app.current_request.json_body

    if 'data' not in body:
        raise BadRequestError('Missing image data')
    if 'ENDPOINT_NAME' not in os.environ:
        raise BadRequestError('Missing endpoint')

    image = base64.b64decode(body['data']) # byte array
    endpoint = os.environ['ENDPOINT_NAME'] 

    # if 'topk' not in body:
    #     topk = 257
    # else:
    #     topk = body['topk']

    print("%s" % (endpoint))

    runtime = boto3.Session().client(service_name='sagemaker-runtime', region_name='us-east-2')

    # endpoint is a variable already 
    response = runtime.invoke_endpoint(EndpointName=endpoint, ContentType='image/jpeg', Body=image)

    # result = json.loads(response)
    # return {'response': str(result)}

    probs = response['Body'].read().decode() # byte array
    probs = ast.literal_eval(probs) # array of floats
    probs = np.array(probs) # numpy array of floats

    # topk_indexes = probs.argsort() # indexes in ascending order of probabilities
    # topk_indexes = topk_indexes[::-1][:topk] # indexes for top k probabilities in descending order

    # topk_categories = []
    # for i in topk_indexes:
    #    topk_categories.append((i+1, probs[i]))

    # return {'response': str(topk_categories)}

    

    













# The view function above will return {"hello": "world"}
# whenever you make an HTTP GET request to '/'.
#
# Here are a few more examples:
#
# @app.route('/hello/{name}')
# def hello_name(name):
#    # '/hello/james' -> {"hello": "james"}
#    return {'hello': name}
#
# @app.route('/users', methods=['POST'])
# def create_user():
#     # This is the JSON body the user sent in their POST request.
#     user_as_json = app.current_request.json_body
#     # We'll echo the json body back to the user in a 'user' key.
#     return {'user': user_as_json}
#
# See the README documentation for more examples.
#
