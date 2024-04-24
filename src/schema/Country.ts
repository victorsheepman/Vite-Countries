export interface Country {
    flags:      Flags;
    name:       Name;
    capital:    string[];
    population: number;
    region:     string,
}

type Flags = {
    png: string;
    svg: string;
    alt: string;
}

type Name = {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

type NativeName =  {
    ron: Ron;
}

type Ron = {
    official: string;
    common:   string;
}