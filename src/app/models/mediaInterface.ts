export interface navigatorInterface{
    logo: imageInterface;
    links: linksInterface[];
}

export interface linksInterface{
    texto: string;
    link: string;
    src?: string;
}

export interface imageHero{
    image: imageCardInterface[]
}

export interface imageGallery{
    image: imageInterface[]
}

export interface imageInterface{
    src: string;
    alt: string;
}

export interface imageCardInterface{
    srcn: string;
    altn: string;
    src: string;
    alt: string;
}

