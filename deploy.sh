ng build --prod
aws s3 cp ./dist s3:alexkamieniarczyk --recursive