// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/pools/nodesdktestpool1/disableautoscale?api-version=2017-09-01.6.0')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 02 Oct 2017 21:45:53 GMT',
  etag: '0x8D509DEF4F1A68B',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c76e15a1-1215-4bfd-96dd-cda795a299f3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/disableautoscale',
  date: 'Mon, 02 Oct 2017 21:45:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/pools/nodesdktestpool1/disableautoscale?api-version=2017-09-01.6.0')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 02 Oct 2017 21:45:53 GMT',
  etag: '0x8D509DEF4F1A68B',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c76e15a1-1215-4bfd-96dd-cda795a299f3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/disableautoscale',
  date: 'Mon, 02 Oct 2017 21:45:53 GMT',
  connection: 'close' });
 return result; }]];