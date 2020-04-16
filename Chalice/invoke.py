import boto3
import json
import numpy as np

file_name = 'wuhan.jpg'
endpoint_name = 'fidus-ppe-detect'
runtime = boto3.Session().client(service_name='runtime.sagemaker',region_name='us-east-1')

with open(file_name, 'rb') as f:
	payload = f.read()
	payload = bytearray(payload)
response = runtime.invoke_endpoint(EndpointName=endpoint_name, ContentType='application/x-image', Body=payload)
print(response['Body'].read())