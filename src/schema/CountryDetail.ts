export interface CountryDetail {
    flags:      Flags;
    name:       Name;
    tld:        string[];
    cioc:       string;
    currencies: Currencies;
    capital:    string[];
    region:     string;
    subregion:  string;
    languages:  Languages;
    borders:    string[];
    population: number;
}
type Currencies =  {
    [currencyCode: string]: Currency;
}

type Currency = {
    name:   string;
    symbol: string;
}

type Flags = {
    png: string;
    svg: string;
    alt: string;
}

type Languages = {
    rus: string;
}

type Name = {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

type NativeName = {
    [key: string]: Native;
}

type Native = {
    official: string;
    common:   string;
}