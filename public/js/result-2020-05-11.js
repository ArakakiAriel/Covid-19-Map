let countries = [
    {
        "country": "US",
        "position_in_table": 1,
        "total": {
            "confirmed": 1329260,
            "actives": 1043141,
            "deaths": 79526,
            "recovered": 216169
        },
        "percentage": {
            "actives": "78.48%",
            "deaths": "5.98%",
            "recovered": "16.26%",
            "mortality_rate": "26.89%"
        },
        "global_percentage": {
            "confirmed": "32.21%",
            "actives": "25.27%",
            "deaths": "1.93%",
            "recovered": "5.24%"
        },
        "coordinates": {
            "latitude": 38.87528697221598,
            "longitude": -82.55238368255986
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SPAIN",
        "position_in_table": 2,
        "total": {
            "confirmed": 224350,
            "actives": 61563,
            "deaths": 26621,
            "recovered": 136166
        },
        "percentage": {
            "actives": "27.44%",
            "deaths": "11.87%",
            "recovered": "60.69%",
            "mortality_rate": "16.35%"
        },
        "global_percentage": {
            "confirmed": "5.44%",
            "actives": "1.49%",
            "deaths": "0.65%",
            "recovered": "3.30%"
        },
        "coordinates": {
            "latitude": 40.463667,
            "longitude": -3.7492200000000007
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "UK",
        "position_in_table": 3,
        "total": {
            "confirmed": 220831,
            "actives": 187517,
            "deaths": 31936,
            "recovered": 1020
        },
        "percentage": {
            "actives": "84.91%",
            "deaths": "14.46%",
            "recovered": "0.46%",
            "mortality_rate": "96.90%"
        },
        "global_percentage": {
            "confirmed": "5.35%",
            "actives": "4.54%",
            "deaths": "0.77%",
            "recovered": "0.02%"
        },
        "coordinates": {
            "latitude": 55.31090251630434,
            "longitude": -3.50953079334876
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ITALY",
        "position_in_table": 4,
        "total": {
            "confirmed": 219070,
            "actives": 83324,
            "deaths": 30560,
            "recovered": 105186
        },
        "percentage": {
            "actives": "38.04%",
            "deaths": "13.95%",
            "recovered": "48.01%",
            "mortality_rate": "22.51%"
        },
        "global_percentage": {
            "confirmed": "5.31%",
            "actives": "2.02%",
            "deaths": "0.74%",
            "recovered": "2.55%"
        },
        "coordinates": {
            "latitude": 41.87194,
            "longitude": 12.56738
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "RUSSIA",
        "position_in_table": 5,
        "total": {
            "confirmed": 209688,
            "actives": 173467,
            "deaths": 1915,
            "recovered": 34306
        },
        "percentage": {
            "actives": "82.73%",
            "deaths": "0.91%",
            "recovered": "16.36%",
            "mortality_rate": "5.29%"
        },
        "global_percentage": {
            "confirmed": "5.08%",
            "actives": "4.20%",
            "deaths": "0.05%",
            "recovered": "0.83%"
        },
        "coordinates": {
            "latitude": 61.524010000000004,
            "longitude": 105.318756
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "FRANCE",
        "position_in_table": 6,
        "total": {
            "confirmed": 177094,
            "actives": 94384,
            "deaths": 26383,
            "recovered": 56327
        },
        "percentage": {
            "actives": "53.30%",
            "deaths": "14.90%",
            "recovered": "31.81%",
            "mortality_rate": "31.90%"
        },
        "global_percentage": {
            "confirmed": "4.29%",
            "actives": "2.29%",
            "deaths": "0.64%",
            "recovered": "1.36%"
        },
        "coordinates": {
            "latitude": 45.59146862688742,
            "longitude": 2.374667125187753
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "GERMANY",
        "position_in_table": 7,
        "total": {
            "confirmed": 171879,
            "actives": 19910,
            "deaths": 7569,
            "recovered": 144400
        },
        "percentage": {
            "actives": "11.58%",
            "deaths": "4.40%",
            "recovered": "84.01%",
            "mortality_rate": "4.98%"
        },
        "global_percentage": {
            "confirmed": "4.16%",
            "actives": "0.48%",
            "deaths": "0.18%",
            "recovered": "3.50%"
        },
        "coordinates": {
            "latitude": 51.165690999999995,
            "longitude": 10.451526
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "BRAZIL",
        "position_in_table": 8,
        "total": {
            "confirmed": 162699,
            "actives": 86619,
            "deaths": 11123,
            "recovered": 64957
        },
        "percentage": {
            "actives": "53.24%",
            "deaths": "6.84%",
            "recovered": "39.92%",
            "mortality_rate": "14.62%"
        },
        "global_percentage": {
            "confirmed": "3.94%",
            "actives": "2.10%",
            "deaths": "0.27%",
            "recovered": "1.57%"
        },
        "coordinates": {
            "latitude": -14.235000000000001,
            "longitude": -51.9253
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "TURKEY",
        "position_in_table": 9,
        "total": {
            "confirmed": 138657,
            "actives": 42180,
            "deaths": 3786,
            "recovered": 92691
        },
        "percentage": {
            "actives": "30.42%",
            "deaths": "2.73%",
            "recovered": "66.85%",
            "mortality_rate": "3.92%"
        },
        "global_percentage": {
            "confirmed": "3.36%",
            "actives": "1.02%",
            "deaths": "0.09%",
            "recovered": "2.25%"
        },
        "coordinates": {
            "latitude": 38.9637,
            "longitude": 35.2433
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "IRAN",
        "position_in_table": 10,
        "total": {
            "confirmed": 115645,
            "actives": 14820,
            "deaths": 6931,
            "recovered": 88874
        },
        "percentage": {
            "actives": "12.82%",
            "deaths": "5.99%",
            "recovered": "76.85%",
            "mortality_rate": "7.23%"
        },
        "global_percentage": {
            "confirmed": "2.80%",
            "actives": "0.36%",
            "deaths": "0.17%",
            "recovered": "2.15%"
        },
        "coordinates": {
            "latitude": 32.39815110488132,
            "longitude": 53.64019900331186
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "CHINA",
        "position_in_table": 11,
        "total": {
            "confirmed": 84010,
            "actives": 206,
            "deaths": 4637,
            "recovered": 79167
        },
        "percentage": {
            "actives": "0.25%",
            "deaths": "5.52%",
            "recovered": "94.24%",
            "mortality_rate": "5.53%"
        },
        "global_percentage": {
            "confirmed": "2.04%",
            "actives": "0.00%",
            "deaths": "0.11%",
            "recovered": "1.92%"
        },
        "coordinates": {
            "latitude": 31.074888334722058,
            "longitude": 112.81884942982978
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "CANADA",
        "position_in_table": 12,
        "total": {
            "confirmed": 70091,
            "actives": 32991,
            "deaths": 4991,
            "recovered": 32109
        },
        "percentage": {
            "actives": "47.07%",
            "deaths": "7.12%",
            "recovered": "45.81%",
            "mortality_rate": "13.45%"
        },
        "global_percentage": {
            "confirmed": "1.70%",
            "actives": "0.80%",
            "deaths": "0.12%",
            "recovered": "0.78%"
        },
        "coordinates": {
            "latitude": 52.40103944871667,
            "longitude": -82.94169084903912
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "PERU",
        "position_in_table": 13,
        "total": {
            "confirmed": 67307,
            "actives": 44069,
            "deaths": 1889,
            "recovered": 21349
        },
        "percentage": {
            "actives": "65.47%",
            "deaths": "2.81%",
            "recovered": "31.72%",
            "mortality_rate": "8.13%"
        },
        "global_percentage": {
            "confirmed": "1.63%",
            "actives": "1.07%",
            "deaths": "0.05%",
            "recovered": "0.52%"
        },
        "coordinates": {
            "latitude": -9.19,
            "longitude": -75.0152
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "INDIA",
        "position_in_table": 14,
        "total": {
            "confirmed": 67161,
            "actives": 43980,
            "deaths": 2212,
            "recovered": 20969
        },
        "percentage": {
            "actives": "65.48%",
            "deaths": "3.29%",
            "recovered": "31.22%",
            "mortality_rate": "9.54%"
        },
        "global_percentage": {
            "confirmed": "1.63%",
            "actives": "1.07%",
            "deaths": "0.05%",
            "recovered": "0.51%"
        },
        "coordinates": {
            "latitude": 20.593684,
            "longitude": 78.96288
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "BELGIUM",
        "position_in_table": 15,
        "total": {
            "confirmed": 53081,
            "actives": 30783,
            "deaths": 8656,
            "recovered": 13642
        },
        "percentage": {
            "actives": "57.99%",
            "deaths": "16.31%",
            "recovered": "25.70%",
            "mortality_rate": "38.82%"
        },
        "global_percentage": {
            "confirmed": "1.29%",
            "actives": "0.75%",
            "deaths": "0.21%",
            "recovered": "0.33%"
        },
        "coordinates": {
            "latitude": 50.833299999999994,
            "longitude": 4.469936
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "NETHERLANDS",
        "position_in_table": 16,
        "total": {
            "confirmed": 42826,
            "actives": 37218,
            "deaths": 5459,
            "recovered": 149
        },
        "percentage": {
            "actives": "86.91%",
            "deaths": "12.75%",
            "recovered": "0.35%",
            "mortality_rate": "97.34%"
        },
        "global_percentage": {
            "confirmed": "1.04%",
            "actives": "0.90%",
            "deaths": "0.13%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 51.95815591696633,
            "longitude": 4.954467169476486
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SAUDI ARABIA",
        "position_in_table": 17,
        "total": {
            "confirmed": 39048,
            "actives": 27345,
            "deaths": 246,
            "recovered": 11457
        },
        "percentage": {
            "actives": "70.03%",
            "deaths": "0.63%",
            "recovered": "29.34%",
            "mortality_rate": "2.10%"
        },
        "global_percentage": {
            "confirmed": "0.95%",
            "actives": "0.66%",
            "deaths": "0.01%",
            "recovered": "0.28%"
        },
        "coordinates": {
            "latitude": 23.885942,
            "longitude": 45.079162
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MEXICO",
        "position_in_table": 18,
        "total": {
            "confirmed": 35022,
            "actives": 9733,
            "deaths": 3465,
            "recovered": 21824
        },
        "percentage": {
            "actives": "27.79%",
            "deaths": "9.89%",
            "recovered": "62.32%",
            "mortality_rate": "13.70%"
        },
        "global_percentage": {
            "confirmed": "0.85%",
            "actives": "0.24%",
            "deaths": "0.08%",
            "recovered": "0.53%"
        },
        "coordinates": {
            "latitude": 23.6345,
            "longitude": -102.5528
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "PAKISTAN",
        "position_in_table": 19,
        "total": {
            "confirmed": 30334,
            "actives": 21612,
            "deaths": 659,
            "recovered": 8063
        },
        "percentage": {
            "actives": "71.25%",
            "deaths": "2.17%",
            "recovered": "26.58%",
            "mortality_rate": "7.56%"
        },
        "global_percentage": {
            "confirmed": "0.73%",
            "actives": "0.52%",
            "deaths": "0.02%",
            "recovered": "0.20%"
        },
        "coordinates": {
            "latitude": 30.3753,
            "longitude": 69.3451
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SWITZERLAND",
        "position_in_table": 20,
        "total": {
            "confirmed": 30305,
            "actives": 1872,
            "deaths": 1833,
            "recovered": 26600
        },
        "percentage": {
            "actives": "6.18%",
            "deaths": "6.05%",
            "recovered": "87.77%",
            "mortality_rate": "6.45%"
        },
        "global_percentage": {
            "confirmed": "0.73%",
            "actives": "0.05%",
            "deaths": "0.04%",
            "recovered": "0.64%"
        },
        "coordinates": {
            "latitude": 46.8182,
            "longitude": 8.2275
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ECUADOR",
        "position_in_table": 21,
        "total": {
            "confirmed": 29559,
            "actives": 23999,
            "deaths": 2127,
            "recovered": 3433
        },
        "percentage": {
            "actives": "81.19%",
            "deaths": "7.20%",
            "recovered": "11.61%",
            "mortality_rate": "38.26%"
        },
        "global_percentage": {
            "confirmed": "0.72%",
            "actives": "0.58%",
            "deaths": "0.05%",
            "recovered": "0.08%"
        },
        "coordinates": {
            "latitude": -1.8312,
            "longitude": -78.1834
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "CHILE",
        "position_in_table": 22,
        "total": {
            "confirmed": 28866,
            "actives": 15442,
            "deaths": 312,
            "recovered": 13112
        },
        "percentage": {
            "actives": "53.50%",
            "deaths": "1.08%",
            "recovered": "45.42%",
            "mortality_rate": "2.32%"
        },
        "global_percentage": {
            "confirmed": "0.70%",
            "actives": "0.37%",
            "deaths": "0.01%",
            "recovered": "0.32%"
        },
        "coordinates": {
            "latitude": -35.6751,
            "longitude": -71.543
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "PORTUGAL",
        "position_in_table": 23,
        "total": {
            "confirmed": 27581,
            "actives": 23897,
            "deaths": 1135,
            "recovered": 2549
        },
        "percentage": {
            "actives": "86.64%",
            "deaths": "4.12%",
            "recovered": "9.24%",
            "mortality_rate": "30.81%"
        },
        "global_percentage": {
            "confirmed": "0.67%",
            "actives": "0.58%",
            "deaths": "0.03%",
            "recovered": "0.06%"
        },
        "coordinates": {
            "latitude": 39.3999,
            "longitude": -8.2245
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SWEDEN",
        "position_in_table": 24,
        "total": {
            "confirmed": 26322,
            "actives": 18126,
            "deaths": 3225,
            "recovered": 4971
        },
        "percentage": {
            "actives": "68.86%",
            "deaths": "12.25%",
            "recovered": "18.89%",
            "mortality_rate": "39.35%"
        },
        "global_percentage": {
            "confirmed": "0.64%",
            "actives": "0.44%",
            "deaths": "0.08%",
            "recovered": "0.12%"
        },
        "coordinates": {
            "latitude": 60.128161,
            "longitude": 18.643501
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SOUTH KOREA",
        "position_in_table": 25,
        "total": {
            "confirmed": 25900,
            "actives": 1021,
            "deaths": 363,
            "recovered": 9997
        },
        "percentage": {
            "actives": "3.94%",
            "deaths": "1.40%",
            "recovered": "38.60%",
            "mortality_rate": "3.50%"
        },
        "global_percentage": {
            "confirmed": "0.63%",
            "actives": "0.02%",
            "deaths": "0.01%",
            "recovered": "0.24%"
        },
        "coordinates": {
            "latitude": 35.961147533320464,
            "longitude": 127.90182826633206
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SINGAPORE",
        "position_in_table": 26,
        "total": {
            "confirmed": 23336,
            "actives": 20595,
            "deaths": 20,
            "recovered": 2721
        },
        "percentage": {
            "actives": "88.25%",
            "deaths": "0.09%",
            "recovered": "11.66%",
            "mortality_rate": "0.73%"
        },
        "global_percentage": {
            "confirmed": "0.57%",
            "actives": "0.50%",
            "deaths": "0.00%",
            "recovered": "0.07%"
        },
        "coordinates": {
            "latitude": 1.2833,
            "longitude": 103.8333
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "IRELAND",
        "position_in_table": 27,
        "total": {
            "confirmed": 23018,
            "actives": 4428,
            "deaths": 1458,
            "recovered": 17110
        },
        "percentage": {
            "actives": "19.24%",
            "deaths": "6.33%",
            "recovered": "74.33%",
            "mortality_rate": "7.85%"
        },
        "global_percentage": {
            "confirmed": "0.56%",
            "actives": "0.11%",
            "deaths": "0.04%",
            "recovered": "0.41%"
        },
        "coordinates": {
            "latitude": 53.140091267703546,
            "longitude": -7.69176582239986
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "BELARUS",
        "position_in_table": 28,
        "total": {
            "confirmed": 22973,
            "actives": 16436,
            "deaths": 131,
            "recovered": 6406
        },
        "percentage": {
            "actives": "71.54%",
            "deaths": "0.57%",
            "recovered": "27.88%",
            "mortality_rate": "2.00%"
        },
        "global_percentage": {
            "confirmed": "0.56%",
            "actives": "0.40%",
            "deaths": "0.00%",
            "recovered": "0.16%"
        },
        "coordinates": {
            "latitude": 53.70980000000001,
            "longitude": 27.9534
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "QATAR",
        "position_in_table": 29,
        "total": {
            "confirmed": 22520,
            "actives": 19753,
            "deaths": 14,
            "recovered": 2753
        },
        "percentage": {
            "actives": "87.71%",
            "deaths": "0.06%",
            "recovered": "12.22%",
            "mortality_rate": "0.51%"
        },
        "global_percentage": {
            "confirmed": "0.55%",
            "actives": "0.48%",
            "deaths": "0.00%",
            "recovered": "0.07%"
        },
        "coordinates": {
            "latitude": 25.3548,
            "longitude": 51.1839
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "UNITED ARAB EMIRATES",
        "position_in_table": 30,
        "total": {
            "confirmed": 18198,
            "actives": 13196,
            "deaths": 198,
            "recovered": 4804
        },
        "percentage": {
            "actives": "72.51%",
            "deaths": "1.09%",
            "recovered": "26.40%",
            "mortality_rate": "3.96%"
        },
        "global_percentage": {
            "confirmed": "0.44%",
            "actives": "0.32%",
            "deaths": "0.00%",
            "recovered": "0.12%"
        },
        "coordinates": {
            "latitude": 23.424076,
            "longitude": 53.847818
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ISRAEL",
        "position_in_table": 31,
        "total": {
            "confirmed": 16477,
            "actives": 4795,
            "deaths": 252,
            "recovered": 11430
        },
        "percentage": {
            "actives": "29.10%",
            "deaths": "1.53%",
            "recovered": "69.37%",
            "mortality_rate": "2.16%"
        },
        "global_percentage": {
            "confirmed": "0.40%",
            "actives": "0.12%",
            "deaths": "0.01%",
            "recovered": "0.28%"
        },
        "coordinates": {
            "latitude": 31.046051,
            "longitude": 34.851612
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "POLAND",
        "position_in_table": 32,
        "total": {
            "confirmed": 15996,
            "actives": 9498,
            "deaths": 800,
            "recovered": 5698
        },
        "percentage": {
            "actives": "59.38%",
            "deaths": "5.00%",
            "recovered": "35.62%",
            "mortality_rate": "12.31%"
        },
        "global_percentage": {
            "confirmed": "0.39%",
            "actives": "0.23%",
            "deaths": "0.02%",
            "recovered": "0.14%"
        },
        "coordinates": {
            "latitude": 51.9194,
            "longitude": 19.1451
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "AUSTRIA",
        "position_in_table": 33,
        "total": {
            "confirmed": 15871,
            "actives": 1262,
            "deaths": 618,
            "recovered": 13991
        },
        "percentage": {
            "actives": "7.95%",
            "deaths": "3.89%",
            "recovered": "88.15%",
            "mortality_rate": "4.23%"
        },
        "global_percentage": {
            "confirmed": "0.38%",
            "actives": "0.03%",
            "deaths": "0.01%",
            "recovered": "0.34%"
        },
        "coordinates": {
            "latitude": 47.5162,
            "longitude": 14.550100000000002
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "JAPAN",
        "position_in_table": 34,
        "total": {
            "confirmed": 15777,
            "actives": 7026,
            "deaths": 624,
            "recovered": 8127
        },
        "percentage": {
            "actives": "44.53%",
            "deaths": "3.96%",
            "recovered": "51.51%",
            "mortality_rate": "7.13%"
        },
        "global_percentage": {
            "confirmed": "0.38%",
            "actives": "0.17%",
            "deaths": "0.02%",
            "recovered": "0.20%"
        },
        "coordinates": {
            "latitude": 36.204824,
            "longitude": 138.252924
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ROMANIA",
        "position_in_table": 35,
        "total": {
            "confirmed": 15362,
            "actives": 7350,
            "deaths": 961,
            "recovered": 7051
        },
        "percentage": {
            "actives": "47.85%",
            "deaths": "6.26%",
            "recovered": "45.90%",
            "mortality_rate": "11.99%"
        },
        "global_percentage": {
            "confirmed": "0.37%",
            "actives": "0.18%",
            "deaths": "0.02%",
            "recovered": "0.17%"
        },
        "coordinates": {
            "latitude": 45.9432,
            "longitude": 24.9668
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "UKRAINE",
        "position_in_table": 36,
        "total": {
            "confirmed": 15232,
            "actives": 11781,
            "deaths": 391,
            "recovered": 3060
        },
        "percentage": {
            "actives": "77.34%",
            "deaths": "2.57%",
            "recovered": "20.09%",
            "mortality_rate": "11.33%"
        },
        "global_percentage": {
            "confirmed": "0.37%",
            "actives": "0.29%",
            "deaths": "0.01%",
            "recovered": "0.07%"
        },
        "coordinates": {
            "latitude": 48.3794,
            "longitude": 31.1656
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "BANGLADESH",
        "position_in_table": 37,
        "total": {
            "confirmed": 14657,
            "actives": 11779,
            "deaths": 228,
            "recovered": 2650
        },
        "percentage": {
            "actives": "80.36%",
            "deaths": "1.56%",
            "recovered": "18.08%",
            "mortality_rate": "7.92%"
        },
        "global_percentage": {
            "confirmed": "0.36%",
            "actives": "0.29%",
            "deaths": "0.01%",
            "recovered": "0.06%"
        },
        "coordinates": {
            "latitude": 23.685,
            "longitude": 90.3563
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "INDONESIA",
        "position_in_table": 38,
        "total": {
            "confirmed": 14032,
            "actives": 10361,
            "deaths": 973,
            "recovered": 2698
        },
        "percentage": {
            "actives": "73.84%",
            "deaths": "6.93%",
            "recovered": "19.23%",
            "mortality_rate": "26.51%"
        },
        "global_percentage": {
            "confirmed": "0.34%",
            "actives": "0.25%",
            "deaths": "0.02%",
            "recovered": "0.07%"
        },
        "coordinates": {
            "latitude": -0.7893,
            "longitude": 113.9213
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "COLOMBIA",
        "position_in_table": 39,
        "total": {
            "confirmed": 11063,
            "actives": 7895,
            "deaths": 463,
            "recovered": 2705
        },
        "percentage": {
            "actives": "71.36%",
            "deaths": "4.19%",
            "recovered": "24.45%",
            "mortality_rate": "14.61%"
        },
        "global_percentage": {
            "confirmed": "0.27%",
            "actives": "0.19%",
            "deaths": "0.01%",
            "recovered": "0.07%"
        },
        "coordinates": {
            "latitude": 4.5709,
            "longitude": -74.2973
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "PHILIPPINES",
        "position_in_table": 40,
        "total": {
            "confirmed": 10794,
            "actives": 8151,
            "deaths": 719,
            "recovered": 1924
        },
        "percentage": {
            "actives": "75.51%",
            "deaths": "6.66%",
            "recovered": "17.82%",
            "mortality_rate": "27.20%"
        },
        "global_percentage": {
            "confirmed": "0.26%",
            "actives": "0.20%",
            "deaths": "0.02%",
            "recovered": "0.05%"
        },
        "coordinates": {
            "latitude": 12.879721000000002,
            "longitude": 121.77401699999999
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "DENMARK",
        "position_in_table": 41,
        "total": {
            "confirmed": 10627,
            "actives": 1683,
            "deaths": 529,
            "recovered": 8415
        },
        "percentage": {
            "actives": "15.84%",
            "deaths": "4.98%",
            "recovered": "79.19%",
            "mortality_rate": "5.91%"
        },
        "global_percentage": {
            "confirmed": "0.26%",
            "actives": "0.04%",
            "deaths": "0.01%",
            "recovered": "0.20%"
        },
        "coordinates": {
            "latitude": 56.37893151406794,
            "longitude": 9.159040020701985
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "DOMINICAN REPUBLIC",
        "position_in_table": 42,
        "total": {
            "confirmed": 10347,
            "actives": 7196,
            "deaths": 388,
            "recovered": 2763
        },
        "percentage": {
            "actives": "69.55%",
            "deaths": "3.75%",
            "recovered": "26.70%",
            "mortality_rate": "12.31%"
        },
        "global_percentage": {
            "confirmed": "0.25%",
            "actives": "0.17%",
            "deaths": "0.01%",
            "recovered": "0.07%"
        },
        "coordinates": {
            "latitude": 18.7357,
            "longitude": -70.1627
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SERBIA",
        "position_in_table": 43,
        "total": {
            "confirmed": 10032,
            "actives": 7085,
            "deaths": 215,
            "recovered": 2732
        },
        "percentage": {
            "actives": "70.62%",
            "deaths": "2.14%",
            "recovered": "27.23%",
            "mortality_rate": "7.30%"
        },
        "global_percentage": {
            "confirmed": "0.24%",
            "actives": "0.17%",
            "deaths": "0.01%",
            "recovered": "0.07%"
        },
        "coordinates": {
            "latitude": 44.0165,
            "longitude": 21.0059
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SOUTH AFRICA",
        "position_in_table": 44,
        "total": {
            "confirmed": 10015,
            "actives": 5648,
            "deaths": 194,
            "recovered": 4173
        },
        "percentage": {
            "actives": "56.40%",
            "deaths": "1.94%",
            "recovered": "41.67%",
            "mortality_rate": "4.44%"
        },
        "global_percentage": {
            "confirmed": "0.24%",
            "actives": "0.14%",
            "deaths": "0.00%",
            "recovered": "0.10%"
        },
        "coordinates": {
            "latitude": -30.5595,
            "longitude": 22.9375
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "EGYPT",
        "position_in_table": 45,
        "total": {
            "confirmed": 9400,
            "actives": 6800,
            "deaths": 525,
            "recovered": 2075
        },
        "percentage": {
            "actives": "72.34%",
            "deaths": "5.59%",
            "recovered": "22.07%",
            "mortality_rate": "20.19%"
        },
        "global_percentage": {
            "confirmed": "0.23%",
            "actives": "0.16%",
            "deaths": "0.01%",
            "recovered": "0.05%"
        },
        "coordinates": {
            "latitude": 26.820553000000004,
            "longitude": 30.802497999999996
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "KUWAIT",
        "position_in_table": 46,
        "total": {
            "confirmed": 8688,
            "actives": 5901,
            "deaths": 58,
            "recovered": 2729
        },
        "percentage": {
            "actives": "67.92%",
            "deaths": "0.67%",
            "recovered": "31.41%",
            "mortality_rate": "2.08%"
        },
        "global_percentage": {
            "confirmed": "0.21%",
            "actives": "0.14%",
            "deaths": "0.00%",
            "recovered": "0.07%"
        },
        "coordinates": {
            "latitude": 29.31166,
            "longitude": 47.481766
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "PANAMA",
        "position_in_table": 47,
        "total": {
            "confirmed": 8448,
            "actives": 3517,
            "deaths": 244,
            "recovered": 4687
        },
        "percentage": {
            "actives": "41.63%",
            "deaths": "2.89%",
            "recovered": "55.48%",
            "mortality_rate": "4.95%"
        },
        "global_percentage": {
            "confirmed": "0.20%",
            "actives": "0.09%",
            "deaths": "0.01%",
            "recovered": "0.11%"
        },
        "coordinates": {
            "latitude": 8.538,
            "longitude": -80.7821
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "CZECHIA",
        "position_in_table": 48,
        "total": {
            "confirmed": 8123,
            "actives": 3369,
            "deaths": 280,
            "recovered": 4474
        },
        "percentage": {
            "actives": "41.47%",
            "deaths": "3.45%",
            "recovered": "55.08%",
            "mortality_rate": "5.89%"
        },
        "global_percentage": {
            "confirmed": "0.20%",
            "actives": "0.08%",
            "deaths": "0.01%",
            "recovered": "0.11%"
        },
        "coordinates": {
            "latitude": 49.8175,
            "longitude": 15.473
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "NORWAY",
        "position_in_table": 49,
        "total": {
            "confirmed": 8105,
            "actives": 7854,
            "deaths": 219,
            "recovered": 32
        },
        "percentage": {
            "actives": "96.90%",
            "deaths": "2.70%",
            "recovered": "0.39%",
            "mortality_rate": "87.25%"
        },
        "global_percentage": {
            "confirmed": "0.20%",
            "actives": "0.19%",
            "deaths": "0.01%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 60.472,
            "longitude": 8.4689
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "AUSTRALIA",
        "position_in_table": 50,
        "total": {
            "confirmed": 6948,
            "actives": 684,
            "deaths": 97,
            "recovered": 6167
        },
        "percentage": {
            "actives": "9.84%",
            "deaths": "1.40%",
            "recovered": "88.76%",
            "mortality_rate": "1.55%"
        },
        "global_percentage": {
            "confirmed": "0.17%",
            "actives": "0.02%",
            "deaths": "0.00%",
            "recovered": "0.15%"
        },
        "coordinates": {
            "latitude": -33.90013821243524,
            "longitude": 146.28682310017274
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MALAYSIA",
        "position_in_table": 51,
        "total": {
            "confirmed": 6656,
            "actives": 1523,
            "deaths": 108,
            "recovered": 5025
        },
        "percentage": {
            "actives": "22.88%",
            "deaths": "1.62%",
            "recovered": "75.50%",
            "mortality_rate": "2.10%"
        },
        "global_percentage": {
            "confirmed": "0.16%",
            "actives": "0.04%",
            "deaths": "0.00%",
            "recovered": "0.12%"
        },
        "coordinates": {
            "latitude": 4.210483999999999,
            "longitude": 101.975766
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MOROCCO",
        "position_in_table": 52,
        "total": {
            "confirmed": 6063,
            "actives": 3321,
            "deaths": 188,
            "recovered": 2554
        },
        "percentage": {
            "actives": "54.77%",
            "deaths": "3.10%",
            "recovered": "42.12%",
            "mortality_rate": "6.86%"
        },
        "global_percentage": {
            "confirmed": "0.15%",
            "actives": "0.08%",
            "deaths": "0.00%",
            "recovered": "0.06%"
        },
        "coordinates": {
            "latitude": 31.7917,
            "longitude": -7.0926
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ARGENTINA",
        "position_in_table": 53,
        "total": {
            "confirmed": 6034,
            "actives": 3972,
            "deaths": 305,
            "recovered": 1757
        },
        "percentage": {
            "actives": "65.83%",
            "deaths": "5.05%",
            "recovered": "29.12%",
            "mortality_rate": "14.79%"
        },
        "global_percentage": {
            "confirmed": "0.15%",
            "actives": "0.10%",
            "deaths": "0.01%",
            "recovered": "0.04%"
        },
        "coordinates": {
            "latitude": -38.4161,
            "longitude": -63.6167
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "FINLAND",
        "position_in_table": 54,
        "total": {
            "confirmed": 5962,
            "actives": 1695,
            "deaths": 267,
            "recovered": 4000
        },
        "percentage": {
            "actives": "28.43%",
            "deaths": "4.48%",
            "recovered": "67.09%",
            "mortality_rate": "6.26%"
        },
        "global_percentage": {
            "confirmed": "0.14%",
            "actives": "0.04%",
            "deaths": "0.01%",
            "recovered": "0.10%"
        },
        "coordinates": {
            "latitude": 61.924110000000006,
            "longitude": 25.748151000000004
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ALGERIA",
        "position_in_table": 55,
        "total": {
            "confirmed": 5723,
            "actives": 2543,
            "deaths": 502,
            "recovered": 2678
        },
        "percentage": {
            "actives": "44.43%",
            "deaths": "8.77%",
            "recovered": "46.79%",
            "mortality_rate": "15.79%"
        },
        "global_percentage": {
            "confirmed": "0.14%",
            "actives": "0.06%",
            "deaths": "0.01%",
            "recovered": "0.06%"
        },
        "coordinates": {
            "latitude": 28.0339,
            "longitude": 1.6596
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "KAZAKHSTAN",
        "position_in_table": 56,
        "total": {
            "confirmed": 5090,
            "actives": 3118,
            "deaths": 31,
            "recovered": 1941
        },
        "percentage": {
            "actives": "61.26%",
            "deaths": "0.61%",
            "recovered": "38.13%",
            "mortality_rate": "1.57%"
        },
        "global_percentage": {
            "confirmed": "0.12%",
            "actives": "0.08%",
            "deaths": "0.00%",
            "recovered": "0.05%"
        },
        "coordinates": {
            "latitude": 48.0196,
            "longitude": 66.9237
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "BAHRAIN",
        "position_in_table": 57,
        "total": {
            "confirmed": 4941,
            "actives": 2863,
            "deaths": 8,
            "recovered": 2070
        },
        "percentage": {
            "actives": "57.94%",
            "deaths": "0.16%",
            "recovered": "41.89%",
            "mortality_rate": "0.38%"
        },
        "global_percentage": {
            "confirmed": "0.12%",
            "actives": "0.07%",
            "deaths": "0.00%",
            "recovered": "0.05%"
        },
        "coordinates": {
            "latitude": 26.0275,
            "longitude": 50.55
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MOLDOVA",
        "position_in_table": 58,
        "total": {
            "confirmed": 4930,
            "actives": 2800,
            "deaths": 169,
            "recovered": 1958
        },
        "percentage": {
            "actives": "56.80%",
            "deaths": "3.43%",
            "recovered": "39.72%",
            "mortality_rate": "7.95%"
        },
        "global_percentage": {
            "confirmed": "0.12%",
            "actives": "0.07%",
            "deaths": "0.00%",
            "recovered": "0.05%"
        },
        "coordinates": {
            "latitude": 47.4116,
            "longitude": 28.369900000000005
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "AFGHANISTAN",
        "position_in_table": 59,
        "total": {
            "confirmed": 4402,
            "actives": 3724,
            "deaths": 120,
            "recovered": 558
        },
        "percentage": {
            "actives": "84.60%",
            "deaths": "2.73%",
            "recovered": "12.68%",
            "mortality_rate": "17.70%"
        },
        "global_percentage": {
            "confirmed": "0.11%",
            "actives": "0.09%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 33.93911,
            "longitude": 67.709953
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "NIGERIA",
        "position_in_table": 60,
        "total": {
            "confirmed": 4399,
            "actives": 3478,
            "deaths": 143,
            "recovered": 778
        },
        "percentage": {
            "actives": "79.06%",
            "deaths": "3.25%",
            "recovered": "17.69%",
            "mortality_rate": "15.53%"
        },
        "global_percentage": {
            "confirmed": "0.11%",
            "actives": "0.08%",
            "deaths": "0.00%",
            "recovered": "0.02%"
        },
        "coordinates": {
            "latitude": 9.082,
            "longitude": 8.6753
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "GHANA",
        "position_in_table": 61,
        "total": {
            "confirmed": 4263,
            "actives": 3863,
            "deaths": 22,
            "recovered": 378
        },
        "percentage": {
            "actives": "90.62%",
            "deaths": "0.52%",
            "recovered": "8.87%",
            "mortality_rate": "5.50%"
        },
        "global_percentage": {
            "confirmed": "0.10%",
            "actives": "0.09%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 7.9464999999999995,
            "longitude": -1.0232
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "LUXEMBOURG",
        "position_in_table": 62,
        "total": {
            "confirmed": 3886,
            "actives": 199,
            "deaths": 101,
            "recovered": 3586
        },
        "percentage": {
            "actives": "5.12%",
            "deaths": "2.60%",
            "recovered": "92.28%",
            "mortality_rate": "2.74%"
        },
        "global_percentage": {
            "confirmed": "0.09%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.09%"
        },
        "coordinates": {
            "latitude": 49.8153,
            "longitude": 6.1296
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "OMAN",
        "position_in_table": 63,
        "total": {
            "confirmed": 3399,
            "actives": 2265,
            "deaths": 17,
            "recovered": 1117
        },
        "percentage": {
            "actives": "66.64%",
            "deaths": "0.50%",
            "recovered": "32.86%",
            "mortality_rate": "1.50%"
        },
        "global_percentage": {
            "confirmed": "0.08%",
            "actives": "0.05%",
            "deaths": "0.00%",
            "recovered": "0.03%"
        },
        "coordinates": {
            "latitude": 21.512583,
            "longitude": 55.92325500000001
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ARMENIA",
        "position_in_table": 64,
        "total": {
            "confirmed": 3313,
            "actives": 1943,
            "deaths": 45,
            "recovered": 1325
        },
        "percentage": {
            "actives": "58.65%",
            "deaths": "1.36%",
            "recovered": "39.99%",
            "mortality_rate": "3.28%"
        },
        "global_percentage": {
            "confirmed": "0.08%",
            "actives": "0.05%",
            "deaths": "0.00%",
            "recovered": "0.03%"
        },
        "coordinates": {
            "latitude": 40.0691,
            "longitude": 45.0382
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "HUNGARY",
        "position_in_table": 65,
        "total": {
            "confirmed": 3263,
            "actives": 1917,
            "deaths": 413,
            "recovered": 933
        },
        "percentage": {
            "actives": "58.75%",
            "deaths": "12.66%",
            "recovered": "28.59%",
            "mortality_rate": "30.68%"
        },
        "global_percentage": {
            "confirmed": "0.08%",
            "actives": "0.05%",
            "deaths": "0.01%",
            "recovered": "0.02%"
        },
        "coordinates": {
            "latitude": 47.16250000000001,
            "longitude": 19.5033
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "THAILAND",
        "position_in_table": 66,
        "total": {
            "confirmed": 3009,
            "actives": 159,
            "deaths": 56,
            "recovered": 2794
        },
        "percentage": {
            "actives": "5.28%",
            "deaths": "1.86%",
            "recovered": "92.85%",
            "mortality_rate": "1.96%"
        },
        "global_percentage": {
            "confirmed": "0.07%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.07%"
        },
        "coordinates": {
            "latitude": 15.870032,
            "longitude": 100.99254100000002
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "IRAQ",
        "position_in_table": 67,
        "total": {
            "confirmed": 2767,
            "actives": 924,
            "deaths": 109,
            "recovered": 1734
        },
        "percentage": {
            "actives": "33.39%",
            "deaths": "3.94%",
            "recovered": "62.67%",
            "mortality_rate": "5.91%"
        },
        "global_percentage": {
            "confirmed": "0.07%",
            "actives": "0.02%",
            "deaths": "0.00%",
            "recovered": "0.04%"
        },
        "coordinates": {
            "latitude": 33.223191,
            "longitude": 43.679291
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "GREECE",
        "position_in_table": 68,
        "total": {
            "confirmed": 2716,
            "actives": 1191,
            "deaths": 151,
            "recovered": 1374
        },
        "percentage": {
            "actives": "43.85%",
            "deaths": "5.56%",
            "recovered": "50.59%",
            "mortality_rate": "9.90%"
        },
        "global_percentage": {
            "confirmed": "0.07%",
            "actives": "0.03%",
            "deaths": "0.00%",
            "recovered": "0.03%"
        },
        "coordinates": {
            "latitude": 39.0742,
            "longitude": 21.8243
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "CAMEROON",
        "position_in_table": 69,
        "total": {
            "confirmed": 2579,
            "actives": 1000,
            "deaths": 114,
            "recovered": 1465
        },
        "percentage": {
            "actives": "38.77%",
            "deaths": "4.42%",
            "recovered": "56.80%",
            "mortality_rate": "7.22%"
        },
        "global_percentage": {
            "confirmed": "0.06%",
            "actives": "0.02%",
            "deaths": "0.00%",
            "recovered": "0.04%"
        },
        "coordinates": {
            "latitude": 3.848,
            "longitude": 11.5021
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "BOLIVIA",
        "position_in_table": 70,
        "total": {
            "confirmed": 2556,
            "actives": 2165,
            "deaths": 118,
            "recovered": 273
        },
        "percentage": {
            "actives": "84.70%",
            "deaths": "4.62%",
            "recovered": "10.68%",
            "mortality_rate": "30.18%"
        },
        "global_percentage": {
            "confirmed": "0.06%",
            "actives": "0.05%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": -16.2902,
            "longitude": -63.5887
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "AZERBAIJAN",
        "position_in_table": 71,
        "total": {
            "confirmed": 2520,
            "actives": 837,
            "deaths": 32,
            "recovered": 1650
        },
        "percentage": {
            "actives": "33.21%",
            "deaths": "1.27%",
            "recovered": "65.48%",
            "mortality_rate": "1.90%"
        },
        "global_percentage": {
            "confirmed": "0.06%",
            "actives": "0.02%",
            "deaths": "0.00%",
            "recovered": "0.04%"
        },
        "coordinates": {
            "latitude": 40.12717019841269,
            "longitude": 47.55802027777778
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "UZBEKISTAN",
        "position_in_table": 72,
        "total": {
            "confirmed": 2418,
            "actives": 527,
            "deaths": 10,
            "recovered": 1881
        },
        "percentage": {
            "actives": "21.79%",
            "deaths": "0.41%",
            "recovered": "77.79%",
            "mortality_rate": "0.53%"
        },
        "global_percentage": {
            "confirmed": "0.06%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.05%"
        },
        "coordinates": {
            "latitude": 41.377491,
            "longitude": 64.585262
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "CROATIA",
        "position_in_table": 73,
        "total": {
            "confirmed": 2187,
            "actives": 333,
            "deaths": 90,
            "recovered": 1764
        },
        "percentage": {
            "actives": "15.23%",
            "deaths": "4.12%",
            "recovered": "80.66%",
            "mortality_rate": "4.85%"
        },
        "global_percentage": {
            "confirmed": "0.05%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.04%"
        },
        "coordinates": {
            "latitude": 45.1,
            "longitude": 15.200000000000001
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "GUINEA",
        "position_in_table": 74,
        "total": {
            "confirmed": 2146,
            "actives": 1421,
            "deaths": 11,
            "recovered": 714
        },
        "percentage": {
            "actives": "66.22%",
            "deaths": "0.51%",
            "recovered": "33.27%",
            "mortality_rate": "1.52%"
        },
        "global_percentage": {
            "confirmed": "0.05%",
            "actives": "0.03%",
            "deaths": "0.00%",
            "recovered": "0.02%"
        },
        "coordinates": {
            "latitude": 9.9456,
            "longitude": -9.6966
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "BOSNIA AND HERZEGOVINA",
        "position_in_table": 75,
        "total": {
            "confirmed": 2117,
            "actives": 904,
            "deaths": 107,
            "recovered": 1106
        },
        "percentage": {
            "actives": "42.70%",
            "deaths": "5.05%",
            "recovered": "52.24%",
            "mortality_rate": "8.82%"
        },
        "global_percentage": {
            "confirmed": "0.05%",
            "actives": "0.02%",
            "deaths": "0.00%",
            "recovered": "0.03%"
        },
        "coordinates": {
            "latitude": 43.9159,
            "longitude": 17.6791
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "HONDURAS",
        "position_in_table": 76,
        "total": {
            "confirmed": 1972,
            "actives": 1661,
            "deaths": 108,
            "recovered": 203
        },
        "percentage": {
            "actives": "84.23%",
            "deaths": "5.48%",
            "recovered": "10.29%",
            "mortality_rate": "34.73%"
        },
        "global_percentage": {
            "confirmed": "0.05%",
            "actives": "0.04%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 15.2,
            "longitude": -86.2419
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "BULGARIA",
        "position_in_table": 77,
        "total": {
            "confirmed": 1965,
            "actives": 1430,
            "deaths": 91,
            "recovered": 444
        },
        "percentage": {
            "actives": "72.77%",
            "deaths": "4.63%",
            "recovered": "22.60%",
            "mortality_rate": "17.01%"
        },
        "global_percentage": {
            "confirmed": "0.05%",
            "actives": "0.03%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 42.7339,
            "longitude": 25.4858
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ICELAND",
        "position_in_table": 78,
        "total": {
            "confirmed": 1801,
            "actives": 18,
            "deaths": 10,
            "recovered": 1773
        },
        "percentage": {
            "actives": "1.00%",
            "deaths": "0.56%",
            "recovered": "98.45%",
            "mortality_rate": "0.56%"
        },
        "global_percentage": {
            "confirmed": "0.04%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.04%"
        },
        "coordinates": {
            "latitude": 64.9631,
            "longitude": -19.0208
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "CUBA",
        "position_in_table": 79,
        "total": {
            "confirmed": 1766,
            "actives": 496,
            "deaths": 77,
            "recovered": 1193
        },
        "percentage": {
            "actives": "28.09%",
            "deaths": "4.36%",
            "recovered": "67.55%",
            "mortality_rate": "6.06%"
        },
        "global_percentage": {
            "confirmed": "0.04%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.03%"
        },
        "coordinates": {
            "latitude": 21.521757,
            "longitude": -77.78116700000002
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ESTONIA",
        "position_in_table": 80,
        "total": {
            "confirmed": 1739,
            "actives": 929,
            "deaths": 60,
            "recovered": 750
        },
        "percentage": {
            "actives": "53.42%",
            "deaths": "3.45%",
            "recovered": "43.13%",
            "mortality_rate": "7.41%"
        },
        "global_percentage": {
            "confirmed": "0.04%",
            "actives": "0.02%",
            "deaths": "0.00%",
            "recovered": "0.02%"
        },
        "coordinates": {
            "latitude": 58.5953,
            "longitude": 25.0136
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SENEGAL",
        "position_in_table": 81,
        "total": {
            "confirmed": 1709,
            "actives": 1040,
            "deaths": 19,
            "recovered": 650
        },
        "percentage": {
            "actives": "60.85%",
            "deaths": "1.11%",
            "recovered": "38.03%",
            "mortality_rate": "2.84%"
        },
        "global_percentage": {
            "confirmed": "0.04%",
            "actives": "0.03%",
            "deaths": "0.00%",
            "recovered": "0.02%"
        },
        "coordinates": {
            "latitude": 14.4974,
            "longitude": -14.4524
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "COTE D'IVOIRE",
        "position_in_table": 82,
        "total": {
            "confirmed": 1700,
            "actives": 885,
            "deaths": 21,
            "recovered": 794
        },
        "percentage": {
            "actives": "52.06%",
            "deaths": "1.24%",
            "recovered": "46.71%",
            "mortality_rate": "2.58%"
        },
        "global_percentage": {
            "confirmed": "0.04%",
            "actives": "0.02%",
            "deaths": "0.00%",
            "recovered": "0.02%"
        },
        "coordinates": {
            "latitude": 7.54,
            "longitude": -5.5470999999999995
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "NORTH MACEDONIA",
        "position_in_table": 83,
        "total": {
            "confirmed": 1642,
            "actives": 415,
            "deaths": 91,
            "recovered": 1136
        },
        "percentage": {
            "actives": "25.27%",
            "deaths": "5.54%",
            "recovered": "69.18%",
            "mortality_rate": "7.42%"
        },
        "global_percentage": {
            "confirmed": "0.04%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.03%"
        },
        "coordinates": {
            "latitude": 41.6086,
            "longitude": 21.7453
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "NEW ZEALAND",
        "position_in_table": 84,
        "total": {
            "confirmed": 1497,
            "actives": 90,
            "deaths": 21,
            "recovered": 1386
        },
        "percentage": {
            "actives": "6.01%",
            "deaths": "1.40%",
            "recovered": "92.59%",
            "mortality_rate": "1.49%"
        },
        "global_percentage": {
            "confirmed": "0.04%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.03%"
        },
        "coordinates": {
            "latitude": -40.9006,
            "longitude": 174.886
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "LITHUANIA",
        "position_in_table": 85,
        "total": {
            "confirmed": 1479,
            "actives": 601,
            "deaths": 50,
            "recovered": 828
        },
        "percentage": {
            "actives": "40.64%",
            "deaths": "3.38%",
            "recovered": "55.98%",
            "mortality_rate": "5.69%"
        },
        "global_percentage": {
            "confirmed": "0.04%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.02%"
        },
        "coordinates": {
            "latitude": 55.1694,
            "longitude": 23.8813
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SLOVAKIA",
        "position_in_table": 86,
        "total": {
            "confirmed": 1457,
            "actives": 490,
            "deaths": 26,
            "recovered": 941
        },
        "percentage": {
            "actives": "33.63%",
            "deaths": "1.78%",
            "recovered": "64.58%",
            "mortality_rate": "2.69%"
        },
        "global_percentage": {
            "confirmed": "0.04%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.02%"
        },
        "coordinates": {
            "latitude": 48.669,
            "longitude": 19.699
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SLOVENIA",
        "position_in_table": 87,
        "total": {
            "confirmed": 1457,
            "actives": 1099,
            "deaths": 102,
            "recovered": 256
        },
        "percentage": {
            "actives": "75.43%",
            "deaths": "7.00%",
            "recovered": "17.57%",
            "mortality_rate": "28.49%"
        },
        "global_percentage": {
            "confirmed": "0.04%",
            "actives": "0.03%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 46.1512,
            "longitude": 14.995500000000002
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SUDAN",
        "position_in_table": 88,
        "total": {
            "confirmed": 1365,
            "actives": 1146,
            "deaths": 70,
            "recovered": 149
        },
        "percentage": {
            "actives": "83.96%",
            "deaths": "5.13%",
            "recovered": "10.92%",
            "mortality_rate": "31.96%"
        },
        "global_percentage": {
            "confirmed": "0.03%",
            "actives": "0.03%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 12.862800000000002,
            "longitude": 30.217599999999997
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "DJIBOUTI",
        "position_in_table": 89,
        "total": {
            "confirmed": 1210,
            "actives": 360,
            "deaths": 3,
            "recovered": 847
        },
        "percentage": {
            "actives": "29.75%",
            "deaths": "0.25%",
            "recovered": "70.00%",
            "mortality_rate": "0.35%"
        },
        "global_percentage": {
            "confirmed": "0.03%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.02%"
        },
        "coordinates": {
            "latitude": 11.8251,
            "longitude": 42.5903
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SOMALIA",
        "position_in_table": 90,
        "total": {
            "confirmed": 1054,
            "actives": 885,
            "deaths": 51,
            "recovered": 118
        },
        "percentage": {
            "actives": "83.97%",
            "deaths": "4.84%",
            "recovered": "11.20%",
            "mortality_rate": "30.18%"
        },
        "global_percentage": {
            "confirmed": "0.03%",
            "actives": "0.02%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 5.152149,
            "longitude": 46.199616
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "GUATEMALA",
        "position_in_table": 91,
        "total": {
            "confirmed": 1052,
            "actives": 916,
            "deaths": 26,
            "recovered": 110
        },
        "percentage": {
            "actives": "87.07%",
            "deaths": "2.47%",
            "recovered": "10.46%",
            "mortality_rate": "19.12%"
        },
        "global_percentage": {
            "confirmed": "0.03%",
            "actives": "0.02%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 15.783499999999998,
            "longitude": -90.2308
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "TUNISIA",
        "position_in_table": 92,
        "total": {
            "confirmed": 1032,
            "actives": 287,
            "deaths": 45,
            "recovered": 700
        },
        "percentage": {
            "actives": "27.81%",
            "deaths": "4.36%",
            "recovered": "67.83%",
            "mortality_rate": "6.04%"
        },
        "global_percentage": {
            "confirmed": "0.03%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.02%"
        },
        "coordinates": {
            "latitude": 33.886917,
            "longitude": 9.537499
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "KYRGYZSTAN",
        "position_in_table": 93,
        "total": {
            "confirmed": 1002,
            "actives": 315,
            "deaths": 12,
            "recovered": 675
        },
        "percentage": {
            "actives": "31.44%",
            "deaths": "1.20%",
            "recovered": "67.37%",
            "mortality_rate": "1.75%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.02%"
        },
        "coordinates": {
            "latitude": 41.20438,
            "longitude": 74.766098
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "CONGO KINSHASA",
        "position_in_table": 94,
        "total": {
            "confirmed": 991,
            "actives": 814,
            "deaths": 41,
            "recovered": 136
        },
        "percentage": {
            "actives": "82.14%",
            "deaths": "4.14%",
            "recovered": "13.72%",
            "mortality_rate": "23.16%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.02%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -4.322447,
            "longitude": 15.307045
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "LATVIA",
        "position_in_table": 95,
        "total": {
            "confirmed": 939,
            "actives": 457,
            "deaths": 18,
            "recovered": 464
        },
        "percentage": {
            "actives": "48.67%",
            "deaths": "1.92%",
            "recovered": "49.41%",
            "mortality_rate": "3.73%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 56.8796,
            "longitude": 24.6032
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "CYPRUS",
        "position_in_table": 96,
        "total": {
            "confirmed": 898,
            "actives": 481,
            "deaths": 16,
            "recovered": 401
        },
        "percentage": {
            "actives": "53.56%",
            "deaths": "1.78%",
            "recovered": "44.65%",
            "mortality_rate": "3.84%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 35.1264,
            "longitude": 33.4299
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "EL SALVADOR",
        "position_in_table": 97,
        "total": {
            "confirmed": 889,
            "actives": 579,
            "deaths": 17,
            "recovered": 293
        },
        "percentage": {
            "actives": "65.13%",
            "deaths": "1.91%",
            "recovered": "32.96%",
            "mortality_rate": "5.48%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 13.7942,
            "longitude": -88.8965
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "KOSOVO",
        "position_in_table": 98,
        "total": {
            "confirmed": 870,
            "actives": 189,
            "deaths": 28,
            "recovered": 653
        },
        "percentage": {
            "actives": "21.72%",
            "deaths": "3.22%",
            "recovered": "75.06%",
            "mortality_rate": "4.11%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.02%"
        },
        "coordinates": {
            "latitude": 42.602636,
            "longitude": 20.902977
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ALBANIA",
        "position_in_table": 99,
        "total": {
            "confirmed": 868,
            "actives": 187,
            "deaths": 31,
            "recovered": 650
        },
        "percentage": {
            "actives": "21.54%",
            "deaths": "3.57%",
            "recovered": "74.88%",
            "mortality_rate": "4.55%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.02%"
        },
        "coordinates": {
            "latitude": 41.1533,
            "longitude": 20.1683
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SRI LANKA",
        "position_in_table": 100,
        "total": {
            "confirmed": 863,
            "actives": 533,
            "deaths": 9,
            "recovered": 321
        },
        "percentage": {
            "actives": "61.76%",
            "deaths": "1.04%",
            "recovered": "37.20%",
            "mortality_rate": "2.73%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 7.873054,
            "longitude": 80.77179699999996
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "LEBANON",
        "position_in_table": 101,
        "total": {
            "confirmed": 845,
            "actives": 585,
            "deaths": 26,
            "recovered": 234
        },
        "percentage": {
            "actives": "69.23%",
            "deaths": "3.08%",
            "recovered": "27.69%",
            "mortality_rate": "10.00%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 33.8547,
            "longitude": 35.8623
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MALDIVES",
        "position_in_table": 102,
        "total": {
            "confirmed": 835,
            "actives": 803,
            "deaths": 3,
            "recovered": 29
        },
        "percentage": {
            "actives": "96.17%",
            "deaths": "0.36%",
            "recovered": "3.47%",
            "mortality_rate": "9.38%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.02%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 3.2028,
            "longitude": 73.2207
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "NIGER",
        "position_in_table": 103,
        "total": {
            "confirmed": 821,
            "actives": 151,
            "deaths": 46,
            "recovered": 624
        },
        "percentage": {
            "actives": "18.39%",
            "deaths": "5.60%",
            "recovered": "76.00%",
            "mortality_rate": "6.87%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.02%"
        },
        "coordinates": {
            "latitude": 17.607789,
            "longitude": 8.081666
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "COSTA RICA",
        "position_in_table": 104,
        "total": {
            "confirmed": 792,
            "actives": 284,
            "deaths": 7,
            "recovered": 501
        },
        "percentage": {
            "actives": "35.86%",
            "deaths": "0.88%",
            "recovered": "63.26%",
            "mortality_rate": "1.38%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 9.7489,
            "longitude": -83.7534
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ANDORRA",
        "position_in_table": 105,
        "total": {
            "confirmed": 755,
            "actives": 157,
            "deaths": 48,
            "recovered": 550
        },
        "percentage": {
            "actives": "20.79%",
            "deaths": "6.36%",
            "recovered": "72.85%",
            "mortality_rate": "8.03%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 42.5063,
            "longitude": 1.5218
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "BURKINA FASO",
        "position_in_table": 106,
        "total": {
            "confirmed": 751,
            "actives": 125,
            "deaths": 49,
            "recovered": 577
        },
        "percentage": {
            "actives": "16.64%",
            "deaths": "6.52%",
            "recovered": "76.83%",
            "mortality_rate": "7.83%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 12.238300000000002,
            "longitude": -1.5616
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "GUINEA-BISSAU",
        "position_in_table": 107,
        "total": {
            "confirmed": 726,
            "actives": 697,
            "deaths": 3,
            "recovered": 26
        },
        "percentage": {
            "actives": "96.01%",
            "deaths": "0.41%",
            "recovered": "3.58%",
            "mortality_rate": "10.34%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.02%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 11.8037,
            "longitude": -15.1804
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "PARAGUAY",
        "position_in_table": 108,
        "total": {
            "confirmed": 713,
            "actives": 538,
            "deaths": 10,
            "recovered": 165
        },
        "percentage": {
            "actives": "75.46%",
            "deaths": "1.40%",
            "recovered": "23.14%",
            "mortality_rate": "5.71%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -23.4425,
            "longitude": -58.4438
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "DIAMOND PRINCESS",
        "position_in_table": 109,
        "total": {
            "confirmed": 712,
            "actives": 48,
            "deaths": 13,
            "recovered": 651
        },
        "percentage": {
            "actives": "6.74%",
            "deaths": "1.83%",
            "recovered": "91.43%",
            "mortality_rate": "1.96%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.02%"
        },
        "coordinates": {
            "latitude": null,
            "longitude": null
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "CRUISE SHIP",
        "position_in_table": 110,
        "total": {
            "confirmed": 712,
            "actives": 137,
            "deaths": 8,
            "recovered": 567
        },
        "percentage": {
            "actives": "19.24%",
            "deaths": "1.12%",
            "recovered": "79.63%",
            "mortality_rate": "1.39%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 0,
            "longitude": 0
        },
        "updated_date": "2020-03-23"
    },
    {
        "country": "URUGUAY",
        "position_in_table": 111,
        "total": {
            "confirmed": 707,
            "actives": 171,
            "deaths": 19,
            "recovered": 517
        },
        "percentage": {
            "actives": "24.19%",
            "deaths": "2.69%",
            "recovered": "73.13%",
            "mortality_rate": "3.54%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": -32.5228,
            "longitude": -55.7658
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MALI",
        "position_in_table": 112,
        "total": {
            "confirmed": 704,
            "actives": 315,
            "deaths": 38,
            "recovered": 351
        },
        "percentage": {
            "actives": "44.74%",
            "deaths": "5.40%",
            "recovered": "49.86%",
            "mortality_rate": "9.77%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 17.570692,
            "longitude": -3.996166000000001
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "OTHERS",
        "position_in_table": 113,
        "total": {
            "confirmed": 696,
            "actives": 650,
            "deaths": 6,
            "recovered": 40
        },
        "percentage": {
            "actives": "93.39%",
            "deaths": "0.86%",
            "recovered": "5.75%",
            "mortality_rate": "13.04%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.02%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 35.4437,
            "longitude": 139.638
        },
        "updated_date": "2020-03-10"
    },
    {
        "country": "KENYA",
        "position_in_table": 114,
        "total": {
            "confirmed": 672,
            "actives": 401,
            "deaths": 32,
            "recovered": 239
        },
        "percentage": {
            "actives": "59.67%",
            "deaths": "4.76%",
            "recovered": "35.57%",
            "mortality_rate": "11.81%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": -0.0236,
            "longitude": 37.9062
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "GABON",
        "position_in_table": 115,
        "total": {
            "confirmed": 661,
            "actives": 543,
            "deaths": 8,
            "recovered": 110
        },
        "percentage": {
            "actives": "82.15%",
            "deaths": "1.21%",
            "recovered": "16.64%",
            "mortality_rate": "6.78%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -0.8036999999999999,
            "longitude": 11.6094
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "GEORGIA",
        "position_in_table": 116,
        "total": {
            "confirmed": 635,
            "actives": 316,
            "deaths": 10,
            "recovered": 309
        },
        "percentage": {
            "actives": "49.76%",
            "deaths": "1.57%",
            "recovered": "48.66%",
            "mortality_rate": "3.13%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 42.3154,
            "longitude": 43.3569
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SAN MARINO",
        "position_in_table": 117,
        "total": {
            "confirmed": 628,
            "actives": 461,
            "deaths": 41,
            "recovered": 126
        },
        "percentage": {
            "actives": "73.41%",
            "deaths": "6.53%",
            "recovered": "20.06%",
            "mortality_rate": "24.55%"
        },
        "global_percentage": {
            "confirmed": "0.02%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 43.9424,
            "longitude": 12.4578
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "TAJIKISTAN",
        "position_in_table": 118,
        "total": {
            "confirmed": 612,
            "actives": 592,
            "deaths": 20,
            "recovered": 0
        },
        "percentage": {
            "actives": "96.73%",
            "deaths": "3.27%",
            "recovered": "0.00%",
            "mortality_rate": "100.00%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 38.861034,
            "longitude": 71.276093
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "JORDAN",
        "position_in_table": 119,
        "total": {
            "confirmed": 540,
            "actives": 142,
            "deaths": 9,
            "recovered": 389
        },
        "percentage": {
            "actives": "26.30%",
            "deaths": "1.67%",
            "recovered": "72.04%",
            "mortality_rate": "2.26%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 31.24,
            "longitude": 36.51
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "TANZANIA",
        "position_in_table": 120,
        "total": {
            "confirmed": 509,
            "actives": 305,
            "deaths": 21,
            "recovered": 183
        },
        "percentage": {
            "actives": "59.92%",
            "deaths": "4.13%",
            "recovered": "35.95%",
            "mortality_rate": "10.29%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -6.369028,
            "longitude": 34.888822
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "JAMAICA",
        "position_in_table": 121,
        "total": {
            "confirmed": 502,
            "actives": 403,
            "deaths": 9,
            "recovered": 90
        },
        "percentage": {
            "actives": "80.28%",
            "deaths": "1.79%",
            "recovered": "17.93%",
            "mortality_rate": "9.09%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 18.1096,
            "longitude": -77.2975
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MALTA",
        "position_in_table": 122,
        "total": {
            "confirmed": 496,
            "actives": 58,
            "deaths": 5,
            "recovered": 433
        },
        "percentage": {
            "actives": "11.69%",
            "deaths": "1.01%",
            "recovered": "87.30%",
            "mortality_rate": "1.14%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 35.9375,
            "longitude": 14.3754
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "TAIWAN",
        "position_in_table": 123,
        "total": {
            "confirmed": 485,
            "actives": 68,
            "deaths": 7,
            "recovered": 381
        },
        "percentage": {
            "actives": "14.02%",
            "deaths": "1.44%",
            "recovered": "78.56%",
            "mortality_rate": "1.80%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 23.7,
            "longitude": 121
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "EQUATORIAL GUINEA",
        "position_in_table": 124,
        "total": {
            "confirmed": 439,
            "actives": 422,
            "deaths": 4,
            "recovered": 13
        },
        "percentage": {
            "actives": "96.13%",
            "deaths": "0.91%",
            "recovered": "2.96%",
            "mortality_rate": "23.53%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 1.6508,
            "longitude": 10.2679
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "VENEZUELA",
        "position_in_table": 125,
        "total": {
            "confirmed": 414,
            "actives": 211,
            "deaths": 10,
            "recovered": 193
        },
        "percentage": {
            "actives": "50.97%",
            "deaths": "2.42%",
            "recovered": "46.62%",
            "mortality_rate": "4.93%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 6.4238,
            "longitude": -66.5897
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "WEST BANK AND GAZA",
        "position_in_table": 126,
        "total": {
            "confirmed": 375,
            "actives": 110,
            "deaths": 2,
            "recovered": 263
        },
        "percentage": {
            "actives": "29.33%",
            "deaths": "0.53%",
            "recovered": "70.13%",
            "mortality_rate": "0.75%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 31.9522,
            "longitude": 35.2332
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MAURITIUS",
        "position_in_table": 127,
        "total": {
            "confirmed": 332,
            "actives": 2,
            "deaths": 10,
            "recovered": 320
        },
        "percentage": {
            "actives": "0.60%",
            "deaths": "3.01%",
            "recovered": "96.39%",
            "mortality_rate": "3.03%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": -20.348404,
            "longitude": 57.552152
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MONTENEGRO",
        "position_in_table": 128,
        "total": {
            "confirmed": 324,
            "actives": 25,
            "deaths": 9,
            "recovered": 290
        },
        "percentage": {
            "actives": "7.72%",
            "deaths": "2.78%",
            "recovered": "89.51%",
            "mortality_rate": "3.01%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 42.708678000000006,
            "longitude": 19.37439
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "CHAD",
        "position_in_table": 129,
        "total": {
            "confirmed": 322,
            "actives": 238,
            "deaths": 31,
            "recovered": 53
        },
        "percentage": {
            "actives": "73.91%",
            "deaths": "9.63%",
            "recovered": "16.46%",
            "mortality_rate": "36.90%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 15.4542,
            "longitude": 18.7322
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "BENIN",
        "position_in_table": 130,
        "total": {
            "confirmed": 319,
            "actives": 255,
            "deaths": 2,
            "recovered": 62
        },
        "percentage": {
            "actives": "79.94%",
            "deaths": "0.63%",
            "recovered": "19.44%",
            "mortality_rate": "3.13%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 9.3077,
            "longitude": 2.3158
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SIERRA LEONE",
        "position_in_table": 131,
        "total": {
            "confirmed": 307,
            "actives": 222,
            "deaths": 18,
            "recovered": 67
        },
        "percentage": {
            "actives": "72.31%",
            "deaths": "5.86%",
            "recovered": "21.82%",
            "mortality_rate": "21.18%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 8.460555000000001,
            "longitude": -11.779889
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "VIETNAM",
        "position_in_table": 132,
        "total": {
            "confirmed": 288,
            "actives": 47,
            "deaths": 0,
            "recovered": 241
        },
        "percentage": {
            "actives": "16.32%",
            "deaths": "0.00%",
            "recovered": "83.68%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.01%"
        },
        "coordinates": {
            "latitude": 14.058324,
            "longitude": 108.277199
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "RWANDA",
        "position_in_table": 133,
        "total": {
            "confirmed": 284,
            "actives": 144,
            "deaths": 0,
            "recovered": 140
        },
        "percentage": {
            "actives": "50.70%",
            "deaths": "0.00%",
            "recovered": "49.30%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -1.9403000000000001,
            "longitude": 29.8739
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "CONGO BRAZZAVILLE",
        "position_in_table": 134,
        "total": {
            "confirmed": 274,
            "actives": 231,
            "deaths": 10,
            "recovered": 33
        },
        "percentage": {
            "actives": "84.31%",
            "deaths": "3.65%",
            "recovered": "12.04%",
            "mortality_rate": "23.26%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.01%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -4.2634,
            "longitude": 15.2832
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ZAMBIA",
        "position_in_table": 135,
        "total": {
            "confirmed": 267,
            "actives": 143,
            "deaths": 7,
            "recovered": 117
        },
        "percentage": {
            "actives": "53.56%",
            "deaths": "2.62%",
            "recovered": "43.82%",
            "mortality_rate": "5.65%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -13.133897,
            "longitude": 27.849332
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "CABO VERDE",
        "position_in_table": 136,
        "total": {
            "confirmed": 246,
            "actives": 188,
            "deaths": 2,
            "recovered": 56
        },
        "percentage": {
            "actives": "76.42%",
            "deaths": "0.81%",
            "recovered": "22.76%",
            "mortality_rate": "3.45%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 16.5388,
            "longitude": -23.0418
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ETHIOPIA",
        "position_in_table": 137,
        "total": {
            "confirmed": 239,
            "actives": 135,
            "deaths": 5,
            "recovered": 99
        },
        "percentage": {
            "actives": "56.49%",
            "deaths": "2.09%",
            "recovered": "41.42%",
            "mortality_rate": "4.81%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 9.145,
            "longitude": 40.4897
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "HONG KONG",
        "position_in_table": 138,
        "total": {
            "confirmed": 235,
            "actives": 105,
            "deaths": 6,
            "recovered": 124
        },
        "percentage": {
            "actives": "44.68%",
            "deaths": "2.55%",
            "recovered": "52.77%",
            "mortality_rate": "4.62%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 22.3,
            "longitude": 114.2
        },
        "updated_date": "2020-03-10"
    },
    {
        "country": "SAO TOME AND PRINCIPE",
        "position_in_table": 139,
        "total": {
            "confirmed": 208,
            "actives": 199,
            "deaths": 5,
            "recovered": 4
        },
        "percentage": {
            "actives": "95.67%",
            "deaths": "2.40%",
            "recovered": "1.92%",
            "mortality_rate": "55.56%"
        },
        "global_percentage": {
            "confirmed": "0.01%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 0.18636000000000003,
            "longitude": 6.613081
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "LIBERIA",
        "position_in_table": 140,
        "total": {
            "confirmed": 199,
            "actives": 100,
            "deaths": 20,
            "recovered": 79
        },
        "percentage": {
            "actives": "50.25%",
            "deaths": "10.05%",
            "recovered": "39.70%",
            "mortality_rate": "20.20%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 6.4280550000000005,
            "longitude": -9.429499
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MADAGASCAR",
        "position_in_table": 141,
        "total": {
            "confirmed": 193,
            "actives": 92,
            "deaths": 0,
            "recovered": 101
        },
        "percentage": {
            "actives": "47.67%",
            "deaths": "0.00%",
            "recovered": "52.33%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -18.766947,
            "longitude": 46.869107
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "HAITI",
        "position_in_table": 142,
        "total": {
            "confirmed": 182,
            "actives": 150,
            "deaths": 15,
            "recovered": 17
        },
        "percentage": {
            "actives": "82.42%",
            "deaths": "8.24%",
            "recovered": "9.34%",
            "mortality_rate": "46.88%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 18.9712,
            "longitude": -72.2852
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "BURMA",
        "position_in_table": 143,
        "total": {
            "confirmed": 180,
            "actives": 102,
            "deaths": 6,
            "recovered": 72
        },
        "percentage": {
            "actives": "56.67%",
            "deaths": "3.33%",
            "recovered": "40.00%",
            "mortality_rate": "7.69%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 21.9162,
            "longitude": 95.956
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "TOGO",
        "position_in_table": 144,
        "total": {
            "confirmed": 174,
            "actives": 74,
            "deaths": 11,
            "recovered": 89
        },
        "percentage": {
            "actives": "42.53%",
            "deaths": "6.32%",
            "recovered": "51.15%",
            "mortality_rate": "11.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 8.6195,
            "longitude": 0.8248
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ESWATINI",
        "position_in_table": 145,
        "total": {
            "confirmed": 172,
            "actives": 143,
            "deaths": 2,
            "recovered": 27
        },
        "percentage": {
            "actives": "83.14%",
            "deaths": "1.16%",
            "recovered": "15.70%",
            "mortality_rate": "6.90%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -26.5225,
            "longitude": 31.465899999999998
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "CENTRAL AFRICAN REPUBLIC",
        "position_in_table": 146,
        "total": {
            "confirmed": 143,
            "actives": 133,
            "deaths": 0,
            "recovered": 10
        },
        "percentage": {
            "actives": "93.01%",
            "deaths": "0.00%",
            "recovered": "6.99%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 6.6111,
            "longitude": 20.9394
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "BRUNEI",
        "position_in_table": 147,
        "total": {
            "confirmed": 141,
            "actives": 6,
            "deaths": 1,
            "recovered": 134
        },
        "percentage": {
            "actives": "4.26%",
            "deaths": "0.71%",
            "recovered": "95.04%",
            "mortality_rate": "0.74%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 4.5353,
            "longitude": 114.7277
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "CAMBODIA",
        "position_in_table": 148,
        "total": {
            "confirmed": 122,
            "actives": 2,
            "deaths": 0,
            "recovered": 120
        },
        "percentage": {
            "actives": "1.64%",
            "deaths": "0.00%",
            "recovered": "98.36%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 11.55,
            "longitude": 104.9167
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "UGANDA",
        "position_in_table": 149,
        "total": {
            "confirmed": 121,
            "actives": 66,
            "deaths": 0,
            "recovered": 55
        },
        "percentage": {
            "actives": "54.55%",
            "deaths": "0.00%",
            "recovered": "45.45%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 1.373333,
            "longitude": 32.290275
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SOUTH SUDAN",
        "position_in_table": 150,
        "total": {
            "confirmed": 120,
            "actives": 118,
            "deaths": 0,
            "recovered": 2
        },
        "percentage": {
            "actives": "98.33%",
            "deaths": "0.00%",
            "recovered": "1.67%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 6.877000000000002,
            "longitude": 31.307
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "TRINIDAD AND TOBAGO",
        "position_in_table": 151,
        "total": {
            "confirmed": 116,
            "actives": 1,
            "deaths": 8,
            "recovered": 107
        },
        "percentage": {
            "actives": "0.86%",
            "deaths": "6.90%",
            "recovered": "92.24%",
            "mortality_rate": "6.96%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 10.6918,
            "longitude": -61.2225
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "NEPAL",
        "position_in_table": 152,
        "total": {
            "confirmed": 110,
            "actives": 79,
            "deaths": 0,
            "recovered": 31
        },
        "percentage": {
            "actives": "71.82%",
            "deaths": "0.00%",
            "recovered": "28.18%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 28.1667,
            "longitude": 84.25
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "GUYANA",
        "position_in_table": 153,
        "total": {
            "confirmed": 104,
            "actives": 59,
            "deaths": 10,
            "recovered": 35
        },
        "percentage": {
            "actives": "56.73%",
            "deaths": "9.62%",
            "recovered": "33.65%",
            "mortality_rate": "22.22%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 4.860416000000002,
            "longitude": -58.930180000000014
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "BAHAMAS",
        "position_in_table": 154,
        "total": {
            "confirmed": 96,
            "actives": 44,
            "deaths": 11,
            "recovered": 37
        },
        "percentage": {
            "actives": "45.83%",
            "deaths": "11.46%",
            "recovered": "38.54%",
            "mortality_rate": "22.92%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 25.026235624999998,
            "longitude": -78.00923945833334
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MONACO",
        "position_in_table": 155,
        "total": {
            "confirmed": 96,
            "actives": 10,
            "deaths": 4,
            "recovered": 82
        },
        "percentage": {
            "actives": "10.42%",
            "deaths": "4.17%",
            "recovered": "85.42%",
            "mortality_rate": "4.65%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 43.73330000000001,
            "longitude": 7.4167
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MOZAMBIQUE",
        "position_in_table": 156,
        "total": {
            "confirmed": 91,
            "actives": 57,
            "deaths": 0,
            "recovered": 34
        },
        "percentage": {
            "actives": "62.64%",
            "deaths": "0.00%",
            "recovered": "37.36%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -18.665695,
            "longitude": 35.529562
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "BARBADOS",
        "position_in_table": 157,
        "total": {
            "confirmed": 84,
            "actives": 20,
            "deaths": 7,
            "recovered": 57
        },
        "percentage": {
            "actives": "23.81%",
            "deaths": "8.33%",
            "recovered": "67.86%",
            "mortality_rate": "10.94%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 13.1939,
            "longitude": -59.54319999999999
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "LIECHTENSTEIN",
        "position_in_table": 158,
        "total": {
            "confirmed": 82,
            "actives": 26,
            "deaths": 1,
            "recovered": 55
        },
        "percentage": {
            "actives": "31.71%",
            "deaths": "1.22%",
            "recovered": "67.07%",
            "mortality_rate": "1.79%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 47.14,
            "longitude": 9.55
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "LIBYA",
        "position_in_table": 159,
        "total": {
            "confirmed": 64,
            "actives": 37,
            "deaths": 3,
            "recovered": 24
        },
        "percentage": {
            "actives": "57.81%",
            "deaths": "4.69%",
            "recovered": "37.50%",
            "mortality_rate": "11.11%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 26.3351,
            "longitude": 17.228331
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MALAWI",
        "position_in_table": 160,
        "total": {
            "confirmed": 56,
            "actives": 39,
            "deaths": 3,
            "recovered": 14
        },
        "percentage": {
            "actives": "69.64%",
            "deaths": "5.36%",
            "recovered": "25.00%",
            "mortality_rate": "17.65%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -13.254307999999998,
            "longitude": 34.301525
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "GUADELOUPE",
        "position_in_table": 161,
        "total": {
            "confirmed": 53,
            "actives": 53,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 16.265,
            "longitude": -61.551
        },
        "updated_date": "2020-03-21"
    },
    {
        "country": "YEMEN",
        "position_in_table": 162,
        "total": {
            "confirmed": 51,
            "actives": 42,
            "deaths": 8,
            "recovered": 1
        },
        "percentage": {
            "actives": "82.35%",
            "deaths": "15.69%",
            "recovered": "1.96%",
            "mortality_rate": "88.89%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 15.552726999999999,
            "longitude": 48.516388
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "TAIPEI AND ENVIRONS",
        "position_in_table": 163,
        "total": {
            "confirmed": 47,
            "actives": 29,
            "deaths": 1,
            "recovered": 17
        },
        "percentage": {
            "actives": "61.70%",
            "deaths": "2.13%",
            "recovered": "36.17%",
            "mortality_rate": "5.56%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 23.699999999999996,
            "longitude": 121
        },
        "updated_date": "2020-03-10"
    },
    {
        "country": "SYRIA",
        "position_in_table": 164,
        "total": {
            "confirmed": 47,
            "actives": 15,
            "deaths": 3,
            "recovered": 29
        },
        "percentage": {
            "actives": "31.91%",
            "deaths": "6.38%",
            "recovered": "61.70%",
            "mortality_rate": "9.38%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 34.802075,
            "longitude": 38.99681500000001
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ANGOLA",
        "position_in_table": 165,
        "total": {
            "confirmed": 45,
            "actives": 30,
            "deaths": 2,
            "recovered": 13
        },
        "percentage": {
            "actives": "66.67%",
            "deaths": "4.44%",
            "recovered": "28.89%",
            "mortality_rate": "13.33%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -11.2027,
            "longitude": 17.8739
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "REUNION",
        "position_in_table": 166,
        "total": {
            "confirmed": 45,
            "actives": 45,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -21.1151,
            "longitude": 55.5364
        },
        "updated_date": "2020-03-21"
    },
    {
        "country": "MONGOLIA",
        "position_in_table": 167,
        "total": {
            "confirmed": 42,
            "actives": 28,
            "deaths": 0,
            "recovered": 14
        },
        "percentage": {
            "actives": "66.67%",
            "deaths": "0.00%",
            "recovered": "33.33%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 46.8625,
            "longitude": 103.84669999999998
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "CZECH REPUBLIC",
        "position_in_table": 168,
        "total": {
            "confirmed": 41,
            "actives": 41,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 49.8175,
            "longitude": 15.473
        },
        "updated_date": "2020-03-10"
    },
    {
        "country": "ERITREA",
        "position_in_table": 169,
        "total": {
            "confirmed": 39,
            "actives": 2,
            "deaths": 0,
            "recovered": 37
        },
        "percentage": {
            "actives": "5.13%",
            "deaths": "0.00%",
            "recovered": "94.87%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 15.1794,
            "longitude": 39.7823
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ZIMBABWE",
        "position_in_table": 170,
        "total": {
            "confirmed": 36,
            "actives": 23,
            "deaths": 4,
            "recovered": 9
        },
        "percentage": {
            "actives": "63.89%",
            "deaths": "11.11%",
            "recovered": "25.00%",
            "mortality_rate": "30.77%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -19.015438,
            "longitude": 29.154857
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MARTINIQUE",
        "position_in_table": 171,
        "total": {
            "confirmed": 32,
            "actives": 31,
            "deaths": 1,
            "recovered": 0
        },
        "percentage": {
            "actives": "96.88%",
            "deaths": "3.13%",
            "recovered": "0.00%",
            "mortality_rate": "100.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 14.6415,
            "longitude": -61.0242
        },
        "updated_date": "2020-03-21"
    },
    {
        "country": "VIET NAM",
        "position_in_table": 172,
        "total": {
            "confirmed": 31,
            "actives": 15,
            "deaths": 0,
            "recovered": 16
        },
        "percentage": {
            "actives": "48.39%",
            "deaths": "0.00%",
            "recovered": "51.61%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 16,
            "longitude": 108
        },
        "updated_date": "2020-03-10"
    },
    {
        "country": "ANTIGUA AND BARBUDA",
        "position_in_table": 173,
        "total": {
            "confirmed": 25,
            "actives": 3,
            "deaths": 3,
            "recovered": 19
        },
        "percentage": {
            "actives": "12.00%",
            "deaths": "12.00%",
            "recovered": "76.00%",
            "mortality_rate": "13.64%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 17.0608,
            "longitude": -61.79639999999999
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "TIMOR-LESTE",
        "position_in_table": 174,
        "total": {
            "confirmed": 24,
            "actives": 3,
            "deaths": 0,
            "recovered": 21
        },
        "percentage": {
            "actives": "12.50%",
            "deaths": "0.00%",
            "recovered": "87.50%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -8.874217,
            "longitude": 125.727539
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "BOTSWANA",
        "position_in_table": 175,
        "total": {
            "confirmed": 23,
            "actives": 10,
            "deaths": 1,
            "recovered": 12
        },
        "percentage": {
            "actives": "43.48%",
            "deaths": "4.35%",
            "recovered": "52.17%",
            "mortality_rate": "7.69%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -22.3285,
            "longitude": 24.6849
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "PALESTINE",
        "position_in_table": 176,
        "total": {
            "confirmed": 22,
            "actives": 22,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 31.9522,
            "longitude": 35.2332
        },
        "updated_date": "2020-03-09"
    },
    {
        "country": "GRENADA",
        "position_in_table": 177,
        "total": {
            "confirmed": 21,
            "actives": 8,
            "deaths": 0,
            "recovered": 13
        },
        "percentage": {
            "actives": "38.10%",
            "deaths": "0.00%",
            "recovered": "61.90%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 12.1165,
            "longitude": -61.679
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "GAMBIA",
        "position_in_table": 178,
        "total": {
            "confirmed": 20,
            "actives": 10,
            "deaths": 1,
            "recovered": 9
        },
        "percentage": {
            "actives": "50.00%",
            "deaths": "5.00%",
            "recovered": "45.00%",
            "mortality_rate": "10.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 13.4432,
            "longitude": -15.3101
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "LAOS",
        "position_in_table": 179,
        "total": {
            "confirmed": 19,
            "actives": 6,
            "deaths": 0,
            "recovered": 13
        },
        "percentage": {
            "actives": "31.58%",
            "deaths": "0.00%",
            "recovered": "68.42%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 19.85627,
            "longitude": 102.495496
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "FRENCH GUIANA",
        "position_in_table": 180,
        "total": {
            "confirmed": 18,
            "actives": 12,
            "deaths": 0,
            "recovered": 6
        },
        "percentage": {
            "actives": "66.67%",
            "deaths": "0.00%",
            "recovered": "33.33%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 3.9338999999999995,
            "longitude": -53.1258
        },
        "updated_date": "2020-03-21"
    },
    {
        "country": "BELIZE",
        "position_in_table": 181,
        "total": {
            "confirmed": 18,
            "actives": 0,
            "deaths": 2,
            "recovered": 16
        },
        "percentage": {
            "actives": "0.00%",
            "deaths": "11.11%",
            "recovered": "88.89%",
            "mortality_rate": "11.11%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 17.1899,
            "longitude": -88.4976
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SAINT LUCIA",
        "position_in_table": 182,
        "total": {
            "confirmed": 18,
            "actives": 1,
            "deaths": 0,
            "recovered": 17
        },
        "percentage": {
            "actives": "5.56%",
            "deaths": "0.00%",
            "recovered": "94.44%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 13.9094,
            "longitude": -60.9789
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "FIJI",
        "position_in_table": 183,
        "total": {
            "confirmed": 18,
            "actives": 4,
            "deaths": 0,
            "recovered": 14
        },
        "percentage": {
            "actives": "22.22%",
            "deaths": "0.00%",
            "recovered": "77.78%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -17.7134,
            "longitude": 178.065
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SAINT VINCENT AND THE GRENADINES",
        "position_in_table": 184,
        "total": {
            "confirmed": 17,
            "actives": 8,
            "deaths": 0,
            "recovered": 9
        },
        "percentage": {
            "actives": "47.06%",
            "deaths": "0.00%",
            "recovered": "52.94%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 12.9843,
            "longitude": -61.2872
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "DOMINICA",
        "position_in_table": 185,
        "total": {
            "confirmed": 16,
            "actives": 1,
            "deaths": 0,
            "recovered": 15
        },
        "percentage": {
            "actives": "6.25%",
            "deaths": "0.00%",
            "recovered": "93.75%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 15.415,
            "longitude": -61.371
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "NICARAGUA",
        "position_in_table": 186,
        "total": {
            "confirmed": 16,
            "actives": 4,
            "deaths": 5,
            "recovered": 7
        },
        "percentage": {
            "actives": "25.00%",
            "deaths": "31.25%",
            "recovered": "43.75%",
            "mortality_rate": "41.67%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 12.865416,
            "longitude": -85.207229
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "NAMIBIA",
        "position_in_table": 187,
        "total": {
            "confirmed": 16,
            "actives": 5,
            "deaths": 0,
            "recovered": 11
        },
        "percentage": {
            "actives": "31.25%",
            "deaths": "0.00%",
            "recovered": "68.75%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -22.9576,
            "longitude": 18.4904
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SAINT KITTS AND NEVIS",
        "position_in_table": 188,
        "total": {
            "confirmed": 15,
            "actives": 1,
            "deaths": 0,
            "recovered": 14
        },
        "percentage": {
            "actives": "6.67%",
            "deaths": "0.00%",
            "recovered": "93.33%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 17.357822,
            "longitude": -62.782998
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "BURUNDI",
        "position_in_table": 189,
        "total": {
            "confirmed": 15,
            "actives": 7,
            "deaths": 1,
            "recovered": 7
        },
        "percentage": {
            "actives": "46.67%",
            "deaths": "6.67%",
            "recovered": "46.67%",
            "mortality_rate": "12.50%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -3.3731,
            "longitude": 29.9189
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "HOLY SEE",
        "position_in_table": 190,
        "total": {
            "confirmed": 12,
            "actives": 10,
            "deaths": 0,
            "recovered": 2
        },
        "percentage": {
            "actives": "83.33%",
            "deaths": "0.00%",
            "recovered": "16.67%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 41.9029,
            "longitude": 12.4534
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "SEYCHELLES",
        "position_in_table": 191,
        "total": {
            "confirmed": 11,
            "actives": 1,
            "deaths": 0,
            "recovered": 10
        },
        "percentage": {
            "actives": "9.09%",
            "deaths": "0.00%",
            "recovered": "90.91%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -4.6796,
            "longitude": 55.49199999999999
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "COMOROS",
        "position_in_table": 192,
        "total": {
            "confirmed": 11,
            "actives": 10,
            "deaths": 1,
            "recovered": 0
        },
        "percentage": {
            "actives": "90.91%",
            "deaths": "9.09%",
            "recovered": "0.00%",
            "mortality_rate": "100.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -11.6455,
            "longitude": 43.3333
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "RUSSIAN FEDERATION",
        "position_in_table": 193,
        "total": {
            "confirmed": 10,
            "actives": 7,
            "deaths": 0,
            "recovered": 3
        },
        "percentage": {
            "actives": "70.00%",
            "deaths": "0.00%",
            "recovered": "30.00%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 60,
            "longitude": 90
        },
        "updated_date": "2020-03-10"
    },
    {
        "country": "MACAO SAR",
        "position_in_table": 194,
        "total": {
            "confirmed": 10,
            "actives": 0,
            "deaths": 0,
            "recovered": 10
        },
        "percentage": {
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "100.00%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 22.1667,
            "longitude": 113.55
        },
        "updated_date": "2020-03-10"
    },
    {
        "country": "MACAU",
        "position_in_table": 195,
        "total": {
            "confirmed": 10,
            "actives": 0,
            "deaths": 0,
            "recovered": 10
        },
        "percentage": {
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "100.00%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 22.1667,
            "longitude": 113.55
        },
        "updated_date": "2020-03-09"
    },
    {
        "country": "SURINAME",
        "position_in_table": 196,
        "total": {
            "confirmed": 10,
            "actives": 0,
            "deaths": 1,
            "recovered": 9
        },
        "percentage": {
            "actives": "0.00%",
            "deaths": "10.00%",
            "recovered": "90.00%",
            "mortality_rate": "10.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 3.9193,
            "longitude": -56.0278
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MS ZAANDAM",
        "position_in_table": 197,
        "total": {
            "confirmed": 9,
            "actives": 7,
            "deaths": 2,
            "recovered": 0
        },
        "percentage": {
            "actives": "77.78%",
            "deaths": "22.22%",
            "recovered": "0.00%",
            "mortality_rate": "100.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": null,
            "longitude": null
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "PAPUA NEW GUINEA",
        "position_in_table": 198,
        "total": {
            "confirmed": 8,
            "actives": 0,
            "deaths": 0,
            "recovered": 8
        },
        "percentage": {
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "100.00%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -6.314993,
            "longitude": 143.95555
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MAURITANIA",
        "position_in_table": 199,
        "total": {
            "confirmed": 8,
            "actives": 1,
            "deaths": 1,
            "recovered": 6
        },
        "percentage": {
            "actives": "12.50%",
            "deaths": "12.50%",
            "recovered": "75.00%",
            "mortality_rate": "14.29%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 21.0079,
            "longitude": -10.9408
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "MAYOTTE",
        "position_in_table": 200,
        "total": {
            "confirmed": 7,
            "actives": 7,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -12.8275,
            "longitude": 45.1662
        },
        "updated_date": "2020-03-21"
    },
    {
        "country": "BHUTAN",
        "position_in_table": 201,
        "total": {
            "confirmed": 7,
            "actives": 2,
            "deaths": 0,
            "recovered": 5
        },
        "percentage": {
            "actives": "28.57%",
            "deaths": "0.00%",
            "recovered": "71.43%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 27.5142,
            "longitude": 90.4336
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "WESTERN SAHARA",
        "position_in_table": 202,
        "total": {
            "confirmed": 6,
            "actives": 1,
            "deaths": 0,
            "recovered": 5
        },
        "percentage": {
            "actives": "16.67%",
            "deaths": "0.00%",
            "recovered": "83.33%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 24.215500000000002,
            "longitude": -12.885799999999998
        },
        "updated_date": "2020-05-10"
    },
    {
        "country": "ARUBA",
        "position_in_table": 203,
        "total": {
            "confirmed": 4,
            "actives": 4,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 12.5211,
            "longitude": -69.9683
        },
        "updated_date": "2020-03-19"
    },
    {
        "country": "SAINT MARTIN",
        "position_in_table": 204,
        "total": {
            "confirmed": 2,
            "actives": 2,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 18.0708,
            "longitude": -63.0501
        },
        "updated_date": "2020-03-10"
    },
    {
        "country": "ST. MARTIN",
        "position_in_table": 205,
        "total": {
            "confirmed": 2,
            "actives": 2,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 18.0708,
            "longitude": -63.0501
        },
        "updated_date": "2020-03-09"
    },
    {
        "country": "FAROE ISLANDS",
        "position_in_table": 206,
        "total": {
            "confirmed": 2,
            "actives": 2,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 61.8926,
            "longitude": -6.9118
        },
        "updated_date": "2020-03-10"
    },
    {
        "country": "IVORY COAST",
        "position_in_table": 207,
        "total": {
            "confirmed": 1,
            "actives": 1,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": null,
            "longitude": null
        },
        "updated_date": "2020-01-27"
    },
    {
        "country": "EAST TIMOR",
        "position_in_table": 208,
        "total": {
            "confirmed": 1,
            "actives": 1,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": -8.55,
            "longitude": 125.56
        },
        "updated_date": "2020-03-21"
    },
    {
        "country": "SAINT BARTHELEMY",
        "position_in_table": 209,
        "total": {
            "confirmed": 1,
            "actives": 1,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 17.9,
            "longitude": -62.8333
        },
        "updated_date": "2020-03-10"
    },
    {
        "country": "CURACAO",
        "position_in_table": 210,
        "total": {
            "confirmed": 1,
            "actives": 1,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 12.1696,
            "longitude": -68.99
        },
        "updated_date": "2020-03-15"
    },
    {
        "country": "VATICAN CITY",
        "position_in_table": 211,
        "total": {
            "confirmed": 1,
            "actives": 1,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 41.9029,
            "longitude": 12.4534
        },
        "updated_date": "2020-03-09"
    },
    {
        "country": "CAYMAN ISLANDS",
        "position_in_table": 212,
        "total": {
            "confirmed": 1,
            "actives": 1,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 19.3133,
            "longitude": -81.2546
        },
        "updated_date": "2020-03-15"
    },
    {
        "country": "CHANNEL ISLANDS",
        "position_in_table": 213,
        "total": {
            "confirmed": 1,
            "actives": 1,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 49.3723,
            "longitude": -2.3644
        },
        "updated_date": "2020-03-10"
    },
    {
        "country": "GIBRALTAR",
        "position_in_table": 214,
        "total": {
            "confirmed": 1,
            "actives": 0,
            "deaths": 0,
            "recovered": 1
        },
        "percentage": {
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "100.00%",
            "mortality_rate": "0.00%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 36.1408,
            "longitude": -5.3536
        },
        "updated_date": "2020-03-10"
    },
    {
        "country": "UNDEFINED",
        "position_in_table": 215,
        "total": {
            "confirmed": 1,
            "actives": 1,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 13.4432,
            "longitude": -15.3101
        },
        "updated_date": "2020-03-21"
    },
    {
        "country": "CAPE VERDE",
        "position_in_table": 216,
        "total": {
            "confirmed": 1,
            "actives": 1,
            "deaths": 0,
            "recovered": 0
        },
        "percentage": {
            "actives": "100.00%",
            "deaths": "0.00%",
            "recovered": "0.00%",
            "mortality_rate": "NaN%"
        },
        "global_percentage": {
            "confirmed": "0.00%",
            "actives": "0.00%",
            "deaths": "0.00%",
            "recovered": "0.00%"
        },
        "coordinates": {
            "latitude": 15.1111,
            "longitude": -23.6167
        },
        "updated_date": "2020-03-21"
    }
]