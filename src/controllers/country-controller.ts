import { Router, Request, Response } from 'express'
import { api } from '../services/api';

interface Country {
  cases?: number;
  deaths?: number;
  today?: number;
};

const countries = [
  'AL',
  'AM',
  'AO',
  'AR',
  'AT',
  'AU',
  'AZ',
  'BA',
  'BD',
  'BE',
  'BF',
  'BG',
  'BI',
  'BJ',
  'BR',
  'BT',
  'BY',
  'CA',
  'CD',
  'CF',
  'CG',
  'CH',
  'CI',
  'CL',
  'CM',
  'CN',
  'CO',
  'CY',
  'CZ',
  'DK',
  'EE',
  'EG',
  'ES',
  'FI',
  'FR',
  'GA',
  'GB',
  'GE',
  'GH',
  'GM',
  'GN',
  'GQ',
  'GR',
  'HR',
  'HU',
  'ID',
  'IE',
  'IL',
  'IN',
  'IQ',
  'IR',
  'IT',
  'JP',
  'KE',
  'KG',
  'KH',
  'KM',
  'KZ',
  'LA',
  'LK',
  'LR',
  'LS',
  'LT',
  'LU',
  'LV',
  'MA',
  'MD',
  'ME',
  'MG',
  'MK',
  'ML',
  'MM',
  'MN',
  'MR',
  'MT',
  'MV',
  'MX',
  'MY',
  'MZ',
  'NA',
  'NE',
  'NG',
  'NL',
  'NO',
  'NP',
  'NZ',
  'PE',
  'PK',
  'PL',
  'PT',
  'RO',
  'RS',
  'RU',
  'RW',
  'SE',
  'SG',
  'SI',
  'SK',
  'SN',
  'SO',
  'SS',
  'TD',
  'TG',
  'TH',
  'TL',
  'TN',
  'TR',
  'UA',
  'UG',
  'US',
  'UZ',
  'VE',
  'ZA',
  'ZM',
  'ZW',
];


class CountryController {
  private router = Router();

  constructor () {
    this.routes();
  }

  public routes (): Router {
    this.router.get('/', this.index);
    return this.router;
  }

  private async index (req: Request, res: Response): Promise<Response> {
    const payload: Country = {};
    for (const country of countries) {
      api({
        params: {
          countryTotal: country,
        },
      }).then(({ data }) => {
        try {
          payload[country] = {
            cases: data.countrydata[0].total_cases,
            deaths: data.countrydata[0].total_deaths,
            today: data.countrydata[0].total_new_cases_today,
          };

          if (Object.keys(payload).length === 112) {
            return res.status(200).json(payload)
          }
        } catch (error) {
          return res.status(500)
        }
      });


    }
    return res.status(500)
  }
}

export default new CountryController()