import unittest
from app import convert

class ConvertTest(unittest.TestCase):

    def test_USD_to_ARS(self):
        self.assertEqual( convert("USD","ARS", 2.0), "ARS 31.84")

    def test_same_currency(self):
        self.assertEqual( convert("ARS","ARS", 1.0), "ARS 1.0")

    def test_int_value(self):
        self.assertEqual( convert("ARS","EUR", 10), "EUR 0.561269059")

    def test_invalid_from_currency(self):    
        self.assertEqual( convert("ASD","ARS", 2.0), "No se encuentra el tipo de cambio solicitado")

    def test_invalid_to_currency(self):    
        self.assertEqual( convert("ARS","ASD", 2.0), "No se encuentra el tipo de cambio solicitado")

if __name__ == '__main__':
    unittest.main()