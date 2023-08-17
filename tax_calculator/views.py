from rest_framework.views import APIView
from rest_framework.response import Response
import requests

class CalculateTaxView(APIView):
    def generate_authentication_token(self):
        # Replace these values with the actual API key, secret, and version
        api_key = 'key_live_AL1pBGGBcbcWUYZfGwE8ZwUfEIz3hRl4'
        api_secret = 'secret_live_8lFpvO88BgGJwfQoQEPcGf26Enprq0Yi'
        api_version = '1.0'

        url = 'https://api.sandbox.co.in/authenticate'

        # Set the headers with API key, secret, and version
        headers = {
            'x-api-key': api_key,
            'x-api-secret': api_secret,
            'x-api-version': api_version
        }

        try:
            response = requests.post(url, headers=headers)
            response_data = response.json()
            if "access_token" in response_data:
                access_token = response_data["access_token"]
                return access_token
            else:
                print("Access token not found in the response.")
                return None

        except requests.exceptions.RequestException as e:
            print("Error occurred while making the request:", e)
            return None

    def post(self, request):
        # Generate the authentication token
        access_token = self.generate_authentication_token()
        if not access_token:
            return Response("Failed to generate authentication token.", status=500)
        
        # print(request.data)
   
        pass1 = "submit1"
        pass2 = "submit2"
        if pass1 in request.data['whichSubmit']:
            print(pass1)
            # Use the first API URL
            url = "https://api.sandbox.co.in/calculators/income-tax/old"
            print("url:",url)
        elif pass2 in request.data['whichSubmit']:
            # Use the second API URL
            url = "https://taxapi.sinewave.co.in/API/TaxCalculator/CalculateTax"
            print("url_2:",url)
            year = request.data["strAY"].split()[1]

            # Creating a new payload without 'FY' in 'strAY'
            new_payload = request.data.copy()

            # Convert year format from '2022-23' to '2022-2023'
            parts = year.split('-')
            if len(parts[1]) == 2:
                new_year = parts[0] + '-20' + parts[1]
                new_payload["strAY"] = new_year
                request.data['strAY'] = new_year
                print(new_year)
        else:
            return Response("Invalid submit button value.", status=400)

        # Define the headers with the access token, API key, and version
        headers = {
            "Authorization": access_token,
            "x-api-key": "key_live_AL1pBGGBcbcWUYZfGwE8ZwUfEIz3hRl4",
            "x-api-version": "1.0"
        }

        payload = request.data
        print("payload:",payload)
        # print("access_token:",access_token)
        # print("data:",data)
        

        # Make a POST request to the API with headers and JSON payload
        response = requests.post(url, headers=headers, json=payload)
        print("response:",response)

        # Check if the request was successful (status code 200)
        if response.status_code == 200 and pass1 in request.data['whichSubmit']:
            # Retrieve the response data
            data = response.json()

            print("Output_data",data)

            # Extract specific values from the response
            gross_taxable_income = data["data"]["gross_taxable_income"]
            tax_on_total_income = data["data"]["tax_on_total_income"]
            surcharge = data["data"]["surcharge"]
            health_and_education_cess = data["data"]["health_and_education_cess"]
            gross_total_income = data["data"]["gross_total_income"]
            total_deductions_under_chapter_vi_a = data["data"]["total_deductions_under_chapter_vi_a"]
            cyla = data["data"]["cyla"]
            rebate = data["data"]["rebate"]
            cfl = data["data"]["cfl"]
            due = data["data"]["due"]
            bfla = data["data"]["bfla"]
            total_taxes_paid = data["data"]["total_taxes_paid"]
            total_tax_payable = data["data"]["total_tax_payable"]
            effective_tax_rate = data["data"]["effective_tax_rate"]
            refund = data["data"]["refund"]
            balancePayable = 0
            lessRebate87A = 0
            taxWithoutSurcharge = 0
            totalIncome = 0

            print("gross_total_income:",gross_total_income)
            print("health_and_education_cess:",health_and_education_cess)

            response_data = {
                'gross_taxable_income': gross_taxable_income,
                'tax_on_total_income': tax_on_total_income,
                'surcharge': surcharge,
                'health_and_education_cess': health_and_education_cess,
                'gross_total_income': gross_total_income,
                'total_deductions_under_chapter_vi_a': total_deductions_under_chapter_vi_a,
                'cyla': cyla,
                'rebate': rebate,
                'cfl': cfl,
                'due': due,
                'bfla': bfla,
                'total_taxes_paid': total_taxes_paid,
                'total_tax_payable': total_tax_payable,
                'effective_tax_rate': effective_tax_rate,
                'refund': refund,
                'balancePayable': balancePayable,
                'lessRebate87A': lessRebate87A,
                'taxWithoutSurcharge': taxWithoutSurcharge,
                'totalIncome' : totalIncome,
        }
        else:
            response.status_code == 200 and pass2 in request.data['whichSubmit']
            data = response.json()
            print("Output_data",data)


            lessRebate87A = data["Lessrebate87A"]
            surcharge = data["Surcharge"]
            health_and_education_cess = data["EducationCess"]
            tax_on_total_income = data["TotalTax"]
            totalIncome = data["TotalIncome"]
            gross_total_income = data["GrossTotalIncome"]
            total_deductions_under_chapter_vi_a = data["T80cout"]
            taxWithoutSurcharge = data["TaxwoSurcharge"]
            balancePayable = data["BalancePayable"]
            total_tax_payable = data["TaxPayable"]
            

            

            response_data = {
                'tax_on_total_income': tax_on_total_income,
                'surcharge': surcharge,
                'health_and_education_cess': health_and_education_cess,
                'gross_total_income': gross_total_income,
                'total_deductions_under_chapter_vi_a': total_deductions_under_chapter_vi_a,
                'lessRebate87A': lessRebate87A,
                'totalIncome' : totalIncome,
                'taxWithoutSurcharge' : taxWithoutSurcharge,
                'balancePayable': balancePayable,
                'total_tax_payable' : total_tax_payable

             
        }
            print("response_data:",response_data)

        if response.status_code == 200:
            return Response(response_data)
        else:
            return Response(response_data, status=response.status_code)

    def new_method(self, data):
        return data