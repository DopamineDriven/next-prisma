export async function seed<T extends import("@prisma/client").PrismaClient>(
  prisma: T
) {
  enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    UNCERTAIN = "UNCERTAIN",
    OTHER = "OTHER"
  }

  enum Pronouns {
    SHE_HER_HERS = "SHE_HER_HERS",
    HE_HIM_HIS = "HE_HIM_HIS",
    THEY_THEM_THEIRS = "THEY_THEM_THEIRS",
    NOT_LISTED = "NOT_LISTED",
    PREFER_NOT_TO_SAY = "PREFER_NOT_TO_SAY"
  }

  enum Role {
    SUPERADMIN = "SUPERADMIN",
    ADMIN = "ADMIN",
    MAINTAINER = "MAINTAINER",
    USER = "USER"
  }

  enum MediaItemDestination {
    COVER_IMAGE = "COVER_IMAGE",
    AVATAR = "AVATAR",
    COMMENT_ATTACHMENT = "COMMENT_ATTACHMENT",
    ENTRY_ATTACHMENT = "ENTRY_ATTACHMENT",
    FEATURED_IMAGE = "FEATURED_IMAGE"
  }

  enum Reaction {
    LIKE = "LIKE",
    LOVE = "LOVE",
    LAUGH = "LAUGH",
    TEARS = "TEARS",
    DISLIKE = "DISLIKE",
    ANGRY = "ANGRY",
    CONFUSED = "CONFUSED",
    CARE = "CARE",
    WOW = "WOW",
    PARROT = "PARROT",
    ROCKET = "ROCKET"
  }

  enum UserStatus {
    ONLINE = "ONLINE",
    OFFLINE = "OFFLINE",
    SUSPENDED = "SUSPENDED",
    DELETED = "DELETED",
    BANNED = "BANNED",
    DEACTIVATED = "DEACTIVATED"
  }

  enum Country {
    Afghanistan = "AF",
    AlandIslands = "AX",
    Albania = "AL",
    Algeria = "DZ",
    AmericanSamoa = "AS",
    Andorra = "AD",
    Angola = "AO",
    Anguilla = "AI",
    Antarctica = "AQ",
    AntiguaAndBarbuda = "AG",
    Argentina = "AR",
    Armenia = "AM",
    Aruba = "AW",
    Australia = "AU",
    Austria = "AT",
    Azerbaijan = "AZ",
    Bahamas = "BS",
    Bahrain = "BH",
    Bangladesh = "BD",
    Barbados = "BB",
    Belarus = "BY",
    Belgium = "BE",
    Belize = "BZ",
    Benin = "BJ",
    Bermuda = "BM",
    Bhutan = "BT",
    Bolivia = "BO",
    BonaireSintEustatiusSaba = "BQ",
    BosniaAndHerzegovina = "BA",
    Botswana = "BW",
    BouvetIsland = "BV",
    Brazil = "BR",
    BritishIndianOceanTerritory = "IO",
    BruneiDarussalam = "BN",
    Bulgaria = "BG",
    BurkinaFaso = "BF",
    Burundi = "BI",
    Cambodia = "KH",
    Cameroon = "CM",
    Canada = "CA",
    CapeVerde = "CV",
    CaymanIslands = "KY",
    CentralAfricanRepublic = "CF",
    Chad = "TD",
    Chile = "CL",
    China = "CN",
    ChristmasIsland = "CX",
    CocosKeelingIslands = "CC",
    Colombia = "CO",
    Comoros = "KM",
    Congo = "CG",
    CongoDemocraticRepublic = "CD",
    CookIslands = "CK",
    CostaRica = "CR",
    CoteDIvoire = "CI",
    Croatia = "HR",
    Cuba = "CU",
    Curaçao = "CW",
    Cyprus = "CY",
    CzechRepublic = "CZ",
    Denmark = "DK",
    Djibouti = "DJ",
    Dominica = "DM",
    DominicanRepublic = "DO",
    Ecuador = "EC",
    Egypt = "EG",
    ElSalvador = "SV",
    EquatorialGuinea = "GQ",
    Eritrea = "ER",
    Estonia = "EE",
    Ethiopia = "ET",
    FalklandIslands = "FK",
    FaroeIslands = "FO",
    Fiji = "FJ",
    Finland = "FI",
    France = "FR",
    FrenchGuiana = "GF",
    FrenchPolynesia = "PF",
    FrenchSouthernTerritories = "TF",
    Gabon = "GA",
    Gambia = "GM",
    Georgia = "GE",
    Germany = "DE",
    Ghana = "GH",
    Gibraltar = "GI",
    Greece = "GR",
    Greenland = "GL",
    Grenada = "GD",
    Guadeloupe = "GP",
    Guam = "GU",
    Guatemala = "GT",
    Guernsey = "GG",
    Guinea = "GN",
    GuineaBissau = "GW",
    Guyana = "GY",
    Haiti = "HT",
    HeardIslandMcdonaldIslands = "HM",
    HolySeeVaticanCityState = "VA",
    Honduras = "HN",
    HongKong = "HK",
    Hungary = "HU",
    Iceland = "IS",
    India = "IN",
    Indonesia = "ID",
    Iran = "IR",
    Iraq = "IQ",
    Ireland = "IE",
    IsleOfMan = "IM",
    Israel = "IL",
    Italy = "IT",
    Jamaica = "JM",
    Japan = "JP",
    Jersey = "JE",
    Jordan = "JO",
    Kazakhstan = "KZ",
    Kenya = "KE",
    Kiribati = "KI",
    Korea = "KR",
    KoreaDemocraticPeoplesRepublic = "KP",
    Kuwait = "KW",
    Kyrgyzstan = "KG",
    LaoPeoplesDemocraticRepublic = "LA",
    Latvia = "LV",
    Lebanon = "LB",
    Lesotho = "LS",
    Liberia = "LR",
    LibyanArabJamahiriya = "LY",
    Liechtenstein = "LI",
    Lithuania = "LT",
    Luxembourg = "LU",
    Macao = "MO",
    Macedonia = "MK",
    Madagascar = "MG",
    Malawi = "MW",
    Malaysia = "MY",
    Maldives = "MV",
    Mali = "ML",
    Malta = "MT",
    MarshallIslands = "MH",
    Martinique = "MQ",
    Mauritania = "MR",
    Mauritius = "MU",
    Mayotte = "YT",
    Mexico = "MX",
    Micronesia = "FM",
    Moldova = "MD",
    Monaco = "MC",
    Mongolia = "MN",
    Montenegro = "ME",
    Montserrat = "MS",
    Morocco = "MA",
    Mozambique = "MZ",
    Myanmar = "MM",
    Namibia = "NA",
    Nauru = "NR",
    Nepal = "NP",
    Netherlands = "NL",
    NewCaledonia = "NC",
    NewZealand = "NZ",
    Nicaragua = "NI",
    Niger = "NE",
    Nigeria = "NG",
    Niue = "NU",
    NorfolkIsland = "NF",
    NorthernMarianaIslands = "MP",
    Norway = "NO",
    Oman = "OM",
    Pakistan = "PK",
    Palau = "PW",
    PalestinianTerritory = "PS",
    Panama = "PA",
    PapuaNewGuinea = "PG",
    Paraguay = "PY",
    Peru = "PE",
    Philippines = "PH",
    Pitcairn = "PN",
    Poland = "PL",
    Portugal = "PT",
    PuertoRico = "PR",
    Qatar = "QA",
    Reunion = "RE",
    Romania = "RO",
    RussianFederation = "RU",
    Rwanda = "RW",
    SaintBarthelemy = "BL",
    SaintHelena = "SH",
    SaintKittsAndNevis = "KN",
    SaintLucia = "LC",
    SaintMartin = "MF",
    SaintPierreAndMiquelon = "PM",
    SaintVincentAndGrenadines = "VC",
    Samoa = "WS",
    SanMarino = "SM",
    SaoTomeAndPrincipe = "ST",
    SaudiArabia = "SA",
    Senegal = "SN",
    Serbia = "RS",
    Seychelles = "SC",
    SierraLeone = "SL",
    Singapore = "SG",
    SintMaarten = "SX",
    Slovakia = "SK",
    Slovenia = "SI",
    SolomonIslands = "SB",
    Somalia = "SO",
    SouthAfrica = "ZA",
    SouthGeorgiaAndSandwichIsl = "GS",
    SouthSudan = "SS",
    Spain = "ES",
    SriLanka = "LK",
    Sudan = "SD",
    Suriname = "SR",
    SvalbardAndJanMayen = "SJ",
    Swaziland = "SZ",
    Sweden = "SE",
    Switzerland = "CH",
    SyrianArabRepublic = "SY",
    Taiwan = "TW",
    Tajikistan = "TJ",
    Tanzania = "TZ",
    Thailand = "TH",
    TimorLeste = "TL",
    Togo = "TG",
    Tokelau = "TK",
    Tonga = "TO",
    TrinidadAndTobago = "TT",
    Tunisia = "TN",
    Turkey = "TR",
    Turkmenistan = "TM",
    TurksAndCaicosIslands = "TC",
    Tuvalu = "TV",
    Uganda = "UG",
    Ukraine = "UA",
    UnitedArabEmirates = "AE",
    UnitedKingdom = "GB",
    UnitedStates = "US",
    UnitedStatesOutlyingIslands = "UM",
    Uruguay = "UY",
    Uzbekistan = "UZ",
    Vanuatu = "VU",
    Venezuela = "VE",
    Vietnam = "VN",
    VirginIslandsBritish = "VG",
    VirginIslandsUS = "VI",
    WallisAndFutuna = "WF",
    WesternSahara = "EH",
    Yemen = "YE",
    Zambia = "ZM",
    Zimbabwe = "ZW"
  }

  enum CountryCode {
    UK = 44,
    USA = 1,
    Algeria = 213,
    Andorra = 376,
    Angola = 244,
    Anguilla = 1264,
    AntiguaBarbuda = 1268,
    Argentina = 54,
    Armenia = 374,
    Aruba = 297,
    Australia = 61,
    Austria = 43,
    Azerbaijan = 994,
    Bahamas = 1242,
    Bahrain = 973,
    Bangladesh = 880,
    Barbados = 1246,
    Belarus = 375,
    Belgium = 32,
    Belize = 501,
    Benin = 229,
    Bermuda = 1441,
    Bhutan = 975,
    Bolivia = 591,
    BosniaHerzegovina = 387,
    Botswana = 267,
    Brazil = 55,
    Brunei = 673,
    Bulgaria = 359,
    BurkinaFaso = 226,
    Burundi = 257,
    Cambodia = 855,
    Cameroon = 237,
    Canada = 1,
    CapeVerdeIslands = 238,
    CaymanIslands = 1345,
    CentralAfricanRepublic = 236,
    Chile = 56,
    China = 86,
    Colombia = 57,
    Comoros = 269,
    Congo = 242,
    CookIslands = 682,
    CostaRica = 506,
    Croatia = 385,
    Cuba = 53,
    CyprusNorth = 90392,
    CyprusSouth = 357,
    CzechRepublic = 42,
    Denmark = 45,
    Djibouti = 253,
    Dominica = 1809,
    DominicanRepublic = 1809,
    Ecuador = 593,
    Egypt = 20,
    ElSalvador = 503,
    EquatorialGuinea = 240,
    Eritrea = 291,
    Estonia = 372,
    Ethiopia = 251,
    FalklandIslands = 500,
    FaroeIslands = 298,
    Fiji = 679,
    Finland = 358,
    France = 33,
    FrenchGuiana = 594,
    FrenchPolynesia = 689,
    Gabon = 241,
    Gambia = 220,
    Georgia = 7880,
    Germany = 49,
    Ghana = 233,
    Gibraltar = 350,
    Greece = 30,
    Greenland = 299,
    Grenada = 1473,
    Guadeloupe = 590,
    Guam = 671,
    Guatemala = 502,
    Guinea = 224,
    GuineaBissau = 245,
    Guyana = 592,
    Haiti = 509,
    Honduras = 504,
    HongKong = 852,
    Hungary = 36,
    Iceland = 354,
    India = 91,
    Indonesia = 62,
    Iran = 98,
    Iraq = 964,
    Ireland = 353,
    Israel = 972,
    Italy = 39,
    Jamaica = 1876,
    Japan = 81,
    Jordan = 962,
    Kazakhstan = 7,
    Kenya = 254,
    Kiribati = 686,
    KoreaNorth = 850,
    KoreaSouth = 82,
    Kuwait = 965,
    Kyrgyzstan = 996,
    Laos = 856,
    Latvia = 371,
    Lebanon = 961,
    Lesotho = 266,
    Liberia = 231,
    Libya = 218,
    Liechtenstein = 417,
    Lithuania = 370,
    Luxembourg = 352,
    Macao = 853,
    Macedonia = 389,
    Madagascar = 261,
    Malawi = 265,
    Malaysia = 60,
    Maldives = 960,
    Mali = 223,
    Malta = 356,
    MarshallIslands = 692,
    Martinique = 596,
    Mauritania = 222,
    Mauritius = 230,
    Mayotte = 269,
    Mexico = 52,
    Micronesia = 691,
    Moldova = 373,
    Monaco = 377,
    Mongolia = 976,
    Montserrat = 1664,
    Morocco = 212,
    Mozambique = 258,
    Myanmar = 95,
    Namibia = 264,
    Nauru = 674,
    Nepal = 977,
    Netherlands = 31,
    NewCaledonia = 687,
    NewZealand = 64,
    Nicaragua = 505,
    Niger = 227,
    Nigeria = 234,
    Niue = 683,
    NorfolkIslands = 672,
    NorthernMarianas = 670,
    Norway = 47,
    Oman = 968,
    Palau = 680,
    Panama = 507,
    PapuaNewGuinea = 675,
    Paraguay = 595,
    Peru = 51,
    Philippines = 63,
    Poland = 48,
    Portugal = 351,
    PuertoRico = 1787,
    Qatar = 974,
    Reunion = 262,
    Romania = 40,
    Russia = 7,
    Rwanda = 250,
    SanMarino = 378,
    SaoTomePrincipe = 239,
    SaudiArabia = 966,
    Senegal = 221,
    Serbia = 381,
    Seychelles = 248,
    SierraLeone = 232,
    Singapore = 65,
    SlovakRepublic = 421,
    Slovenia = 386,
    SolomonIslands = 677,
    Somalia = 252,
    SouthAfrica = 27,
    Spain = 34,
    SriLanka = 94,
    StHelena = 290,
    StKitts = 1869,
    StLucia = 1758,
    Sudan = 249,
    Suriname = 597,
    Swaziland = 268,
    Sweden = 46,
    Switzerland = 41,
    Syria = 963,
    Taiwan = 886,
    Tajikstan = 7,
    Thailand = 66,
    Togo = 228,
    Tonga = 676,
    TrinidadTobago = 1868,
    Tunisia = 216,
    Turkey = 90,
    Turkmenistan = 7,
    TurkmenistanB = 993,
    TurksCaicosIslands = 1649,
    Tuvalu = 688,
    Uganda = 256,
    Ukraine = 380,
    UnitedArabEmirates = 971,
    Uruguay = 598,
    Uzbekistan = 7,
    Vanuatu = 678,
    VaticanCity = 379,
    Venezuela = 58,
    Vietnam = 84,
    VirginIslandsBritish = 1284,
    VirginIslandsUS = 1340,
    WallisFutuna = 681,
    YemenNorth = 969,
    YemenSouth = 967,
    Zambia = 260,
    Zimbabwe = 263
  }

  enum MimeType {
    GIF = "GIF",
    JPEG = "JPEG",
    WEBP = "WEBP",
    AVIF = "AVIF",
    PNG = "PNG",
    SVG = "SVG",
    TIFF = "TIFF",
    BMP = "BMP"
  }

  type MediaItem = {
    id: string;
    uploadedAt: Date;
    updatedAt?: Date;
    filename: string;
    size: string;
    filetype: keyof typeof MimeType;
    destination: keyof typeof MediaItemDestination;
    fileLastModified: Date;
    width: number;
    height: number;
    quality: number;
    src: string;
    srcSet: string;
    ariaLabel: string;
    description?: string;
    title: string;
    caption: string;
  };

  interface SetMediaItem {
    set: MediaItem;
  }

  interface SetMediaItems {
    set: MediaItem[];
  }

  type Bio = {
    headline: string;
    intro?: string;
    body?: string;
    status?: string;
    createdAt: Date;
    updatedAt?: Date;
  };

  interface SetBio {
    set: Bio;
  }

  type Category = {
    creatorId: string;
    createdAt: Date;
    updatedAt: Date;
    root: boolean;
    name: string;
  };

  interface SetCategory {
    set: Category;
  }

  const { ObjectId } = await import("bson");
  const faker = await import("faker");
  const bcrypt = await import("bcrypt");

  const hashPassword = async (input: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(input, salt);
    return hash;
  };

  const toBase64 = (
    str: WithImplicitCoercion<string | Uint8Array | readonly number[]>
  ) => {
    return Buffer.from(str).toString("base64");
  };

  const hashedPassword = await hashPassword(
    process.env.PWD ? process.env.PWD : "Nest2022!"
  );
  const seedFirstName = faker.name.firstName();
  const seedSurname = faker.name.lastName();
  const accessToken = faker.datatype.hexaDecimal(166);
  const refreshToken = faker.datatype.hexaDecimal(166);
  const exp = faker.date.future(0.0821355, new Date(Date.now()));
  const seedUserId = new ObjectId().toHexString();
  const seedProfileId = new ObjectId().toHexString();
  const seedOneEntryId = new ObjectId().toHexString();
  const seedOneAccountId = new ObjectId().toHexString();
  const seedOneSessionId = new ObjectId().toHexString();
  const seedOneCommentId = new ObjectId().toHexString();

  function n(min: number, max: number) {
    const { round, random } = Math;
    return round(random() * (max - min) + min);
  }

  const {
    UnitedStates,
    UnitedKingdom,
    Australia,
    Germany,
    SouthAfrica,
    Bahamas,
    Taiwan,
    Japan,
    Vietnam,
    India,
    Norway,
    Canada,
    Mexico,
    Chile,
    SaudiArabia,
    Argentina,
    Italy,
    Poland,
    RussianFederation,
    France
  } = Country;

  const seedUserCountry = (min: number, max: number) =>
    [
      UnitedStates,
      UnitedKingdom,
      Australia,
      Germany,
      SouthAfrica,
      Bahamas,
      Taiwan,
      Japan,
      Vietnam,
      India,
      Norway,
      Canada,
      Mexico,
      Chile,
      SaudiArabia,
      Argentina,
      Italy,
      Poland,
      RussianFederation,
      France
    ][n(min, max)];

  const userCountry = seedUserCountry(0, 20);

  const countryToCountryCode = (country: typeof userCountry = userCountry) =>
    userCountry.valueOf().includes(UnitedStates) && country === UnitedStates
      ? CountryCode.USA.valueOf()
      : userCountry.valueOf().includes(UnitedKingdom) &&
        country === UnitedKingdom
      ? CountryCode.UK.valueOf()
      : userCountry.valueOf().includes(Australia) && country === Australia
      ? CountryCode.Australia.valueOf()
      : userCountry.valueOf().includes(Germany) && country === Germany
      ? CountryCode.Germany.valueOf()
      : userCountry.valueOf().includes(SouthAfrica) && country === SouthAfrica
      ? CountryCode.SouthAfrica.valueOf()
      : userCountry.valueOf().includes(Bahamas) && country === Bahamas
      ? CountryCode.Bahamas.valueOf()
      : userCountry.valueOf().includes(Taiwan) && country === Taiwan
      ? CountryCode.Taiwan.valueOf()
      : userCountry.valueOf().includes(Japan) && country === Japan
      ? CountryCode.Japan.valueOf()
      : userCountry.valueOf().includes(Vietnam) && country === Vietnam
      ? CountryCode.Vietnam.valueOf()
      : userCountry.valueOf().includes(India) && country === India
      ? CountryCode.India.valueOf()
      : userCountry.valueOf().includes(Norway) && country === Norway
      ? CountryCode.Norway.valueOf()
      : userCountry.valueOf().includes(Canada) && country === Canada
      ? CountryCode.Canada.valueOf()
      : userCountry.valueOf().includes(Mexico) && country === Mexico
      ? CountryCode.Mexico.valueOf()
      : userCountry.valueOf().includes(Chile) && country === Chile
      ? CountryCode.Chile.valueOf()
      : userCountry.valueOf().includes(SaudiArabia) && country === SaudiArabia
      ? CountryCode.SaudiArabia.valueOf()
      : userCountry.valueOf().includes(Argentina) && country === Argentina
      ? CountryCode.Argentina.valueOf()
      : userCountry.valueOf().includes(Italy) && country === Italy
      ? CountryCode.Italy.valueOf()
      : userCountry.valueOf().includes(Poland) && country === Poland
      ? CountryCode.Poland.valueOf()
      : userCountry.valueOf().includes(RussianFederation) &&
        country === RussianFederation
      ? CountryCode.Russia.valueOf()
      : userCountry.valueOf().includes(France) && country === France
      ? CountryCode.France.valueOf()
      : 0;

  const thoseDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .map(value => {
      value = n(0, 9);
      return value;
    })
    .join("");

  const phoneNumberCallingCode = countryToCountryCode(userCountry)
    .valueOf()
    .toString()
    .trim();

  const standardE164 = `+${phoneNumberCallingCode}${thoseDigits}`.trim();

  const usingUnixTime = (): number => {
    const twoThousandFourUnix = 1095379200500; // 2004
    const zeroUnix = 0; // 1970
    const val = n(zeroUnix, twoThousandFourUnix);
    return val;
  };

  const fractionateTimeStamp = (data: string): string[] => {
    return data.split(/([T])/);
  };

  const featuredImageFileLastModified = faker.date.past(
    0.0921355,
    new Date(Date.now())
  );

  const featuredImageId = new ObjectId().toHexString();

  const featuredImageName = `${seedFirstName}s-featured-image`;

  const featuredImage: SetMediaItem = {
    set: {
      id: featuredImageId,
      uploadedAt: new Date(Date.now()),
      quality: 100,
      fileLastModified: featuredImageFileLastModified,
      filename: featuredImageName,
      src: faker.image.imageUrl(2250, 1550, "galaxy", true, true),
      srcSet: "",
      filetype: MimeType.WEBP,
      size: "1.35MB",
      width: 2250,
      height: 1550,
      caption: faker.lorem.sentence(5),
      description: faker.lorem.sentences(2),
      title: `${seedFirstName} ${seedSurname}'s Featured Image`,
      ariaLabel: "Accessibility label",
      destination: MediaItemDestination.FEATURED_IMAGE
    }
  };

  const featuredImageString =
    "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80";

  const coverImageFileLastModified = faker.date.past(
    0.0821355,
    new Date(Date.now())
  );

  const coverImageId = new ObjectId().toHexString();

  const coverImageFilename = `${seedFirstName}s-galactic-cover`;

  const coverImage: SetMediaItem = {
    set: {
      id: coverImageId,
      uploadedAt: new Date(Date.now()),
      fileLastModified: coverImageFileLastModified,
      filename: coverImageFilename,
      src: featuredImageString,
      srcSet: "",
      filetype: MimeType.PNG,
      size: "1.25MB",
      width: 1000,
      quality: 80,
      height: 667,
      description: faker.lorem.sentences(2),
      title: `${seedFirstName} ${seedSurname}'s Cover Image`,
      ariaLabel: "Accessibility label",
      caption: faker.lorem.sentence(5),
      destination: MediaItemDestination.COVER_IMAGE
    }
  };

  const userAvatarFileLastModified = faker.date.past(
    0.0221355,
    new Date(Date.now())
  );

  const userAvatarId = new ObjectId().toHexString();

  const userAvatarFileName = `${seedFirstName}s-fresh-avatar`;
  const userAvatarString = `https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g4apn65eo8acy988pfhb.gif`;
  const userAvatar: SetMediaItem = {
    set: {
      updatedAt: undefined,
      id: userAvatarId,
      uploadedAt: new Date(Date.now()),
      fileLastModified: userAvatarFileLastModified,
      quality: 100,
      filename: userAvatarFileName,
      src: userAvatarString,
      srcSet: "",
      filetype: MimeType.GIF,
      size: "0.25MB",
      width: 125,
      height: 125,
      caption: faker.lorem.sentence(5),
      description: faker.lorem.sentences(2),
      title: `${seedFirstName} ${seedSurname}'s Avatar`,
      ariaLabel: "Accessibility label",
      destination: MediaItemDestination.AVATAR
    }
  };

  const commentAttachmentLastModified = faker.date.past(
    0.0421355,
    new Date(Date.now())
  );

  const commentFilename = "Something Something Danger Zone";
  const commentAttachmentSrc = `https://c.tenor.com/OeBiYk-IfZEAAAAC/archer-coroca.gif`;

  const commentAttachmentId = new ObjectId().toHexString();

  const commentAttachment: SetMediaItem = {
    set: {
      updatedAt: undefined,
      id: commentAttachmentId,
      uploadedAt: new Date(Date.now()),
      fileLastModified: commentAttachmentLastModified,
      quality: 90,
      filename: commentFilename,
      src: commentAttachmentSrc,
      srcSet: "",
      filetype: MimeType.GIF,
      size: "0.5MB",
      width: 498,
      height: 280,
      description: faker.lorem.sentences(2),
      caption: "",
      title: commentFilename,
      ariaLabel: commentFilename,
      destination: MediaItemDestination.COMMENT_ATTACHMENT
    }
  };
  const entryOneFileName = "Blood Moon";
  const entryOneAttachmentSrc =
    "https://images.unsplash.com/photo-1443428018053-13da55589fed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";

  const entryTwoFileName="Solar Eclipse"
  const entryTwoAttachmentSrc = `https://images.unsplash.com/photo-1503862242163-608ef852091d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80`;


  const entryAttachmentIdOne = new ObjectId().toHexString();

  const entryAttachmentIdTwo = new ObjectId().toHexString();

  const entryAttachmentOneLastModified = faker.date.past(
      0.1421355,
      new Date(Date.now())
  );

    const entryAttachmentTwoLastModified = faker.date.past(
      3.1421355,
      new Date(Date.now())
  );

  const entryAttachments: SetMediaItems = {
    set: [
      {
        updatedAt: undefined,
        id: entryAttachmentIdOne,
        uploadedAt: new Date(Date.now()),
        fileLastModified: entryAttachmentOneLastModified,
        quality: 90,
        filename: entryOneFileName,
        src: entryOneAttachmentSrc,
        srcSet: "",
        filetype: MimeType.PNG,
        size: "0.65MB",
        width: 498,
        height: 280,
        description: "Blood Moon in Sweden",
        caption: "Stockholm, Sweden",
        title: entryOneFileName,
        ariaLabel: entryOneFileName,
        destination: MediaItemDestination.ENTRY_ATTACHMENT
      },
      {
        updatedAt: undefined,
        id: entryAttachmentIdTwo,
        uploadedAt: new Date(Date.now()),
        fileLastModified: entryAttachmentTwoLastModified,
        quality: 90,
        filename: entryTwoFileName,
        src: entryTwoAttachmentSrc,
        srcSet: "",
        filetype: MimeType.PNG,
        size: "0.5MB",
        width: 498,
        height: 280,
        description: faker.lorem.sentences(2),
        caption: "Stockhold, Sweden",
        title: entryTwoFileName,
        ariaLabel: entryTwoFileName,
        destination: MediaItemDestination.ENTRY_ATTACHMENT
      }
    ]
  };

  const dobGenerated = fractionateTimeStamp(
    new Date(usingUnixTime()).toUTCString()
  )[0]; // adheres to the Date Intl format by splitting the timestamp at the T character

  const userCity = faker.address.city();

  const reactionTemplate = (min: number, max: number) =>
    [
      Reaction.ANGRY,
      Reaction.CARE,
      Reaction.CONFUSED,
      Reaction.DISLIKE,
      Reaction.LAUGH,
      Reaction.LIKE,
      Reaction.LOVE,
      Reaction.PARROT,
      Reaction.ROCKET,
      Reaction.TEARS,
      Reaction.WOW,
      Reaction.LAUGH,
      Reaction.LIKE,
      Reaction.LOVE,
      Reaction.PARROT,
      Reaction.LAUGH,
      Reaction.LIKE,
      Reaction.LOVE,
      Reaction.PARROT,
      Reaction.LAUGH,
      Reaction.LIKE,
      Reaction.LOVE,
      Reaction.PARROT,
      Reaction.LAUGH,
      Reaction.LIKE,
      Reaction.LOVE,
      Reaction.PARROT,
      Reaction.LAUGH,
      Reaction.LIKE,
      Reaction.LOVE,
      Reaction.PARROT
    ][n(min, max)] as keyof typeof Reaction;

  const roleTemplate = (min: number, max: number) =>
    [
      Role.USER,
      Role.USER,
      Role.MAINTAINER,
      Role.USER,
      Role.USER,
      Role.ADMIN,
      Role.USER,
      Role.USER,
      Role.USER,
      Role.ADMIN,
      Role.USER,
      Role.USER
    ][n(min, max)] as keyof typeof Role;

  const userStatusTemplate = (min: number, max: number) =>
    [
      UserStatus.ONLINE,
      UserStatus.OFFLINE,
      UserStatus.ONLINE,
      UserStatus.DEACTIVATED,
      UserStatus.ONLINE,
      UserStatus.OFFLINE,
      UserStatus.ONLINE,
      UserStatus.OFFLINE,
      UserStatus.ONLINE,
      UserStatus.OFFLINE,
      UserStatus.ONLINE,
      UserStatus.ONLINE,
      UserStatus.OFFLINE
    ][n(min, max)] as keyof typeof UserStatus;

  const genderTemplate = (min: number, max: number) =>
    [
      Gender.FEMALE,
      Gender.MALE,
      Gender.MALE,
      Gender.FEMALE,
      Gender.MALE,
      Gender.FEMALE,
      Gender.OTHER,
      Gender.UNCERTAIN,
      Gender.FEMALE,
      Gender.FEMALE,
      Gender.MALE,
      Gender.MALE
    ][n(min, max)] as keyof typeof Gender;

  const countryTemplate = (min: number, max: number) =>
    [
      UnitedStates,
      UnitedKingdom,
      Australia,
      Germany,
      SouthAfrica,
      Bahamas,
      Taiwan,
      Japan,
      Vietnam,
      India,
      Norway,
      Canada,
      Mexico,
      Chile,
      SaudiArabia,
      Argentina,
      Italy,
      Poland,
      RussianFederation,
      France
    ][n(min, max)];

  const pronounsTemplate = (min: number, max: number) =>
    [
      Pronouns.HE_HIM_HIS,
      Pronouns.SHE_HER_HERS,
      Pronouns.HE_HIM_HIS,
      Pronouns.SHE_HER_HERS,
      Pronouns.HE_HIM_HIS,
      Pronouns.SHE_HER_HERS,
      Pronouns.HE_HIM_HIS,
      Pronouns.SHE_HER_HERS,
      Pronouns.THEY_THEM_THEIRS,
      Pronouns.NOT_LISTED,
      Pronouns.PREFER_NOT_TO_SAY,
      Pronouns.HE_HIM_HIS,
      Pronouns.SHE_HER_HERS,
      Pronouns.HE_HIM_HIS,
      Pronouns.SHE_HER_HERS
    ][n(min, max)];

  const seedUser = async () => {
    return await prisma.user.create({
      data: {
        imageMeta: userAvatar,
        createdAt: new Date(Date.now()),
        role: roleTemplate(0, 10),
        email: `${seedFirstName.toLowerCase()}.${seedSurname.toLowerCase()}@gmail.com`,
        image: userAvatarString,
        id: seedUserId,
        status: userStatusTemplate(0, 11),
        name: seedFirstName + " " + seedSurname,
        emailVerified: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
        profile: {
          create: {
            bio: {
              set: {
                headline: faker.random.words(10),
                body: faker.lorem.paragraph(5),
                createdAt: new Date(Date.now()),
                intro: faker.lorem.sentences(2),
                status: reactionTemplate(0, 19).toString()
              }
            } as SetBio,
            city: userCity,
            dob: dobGenerated,
            gender: genderTemplate(0, 11),
            id: seedProfileId,
            country: countryTemplate(0, 20),
            phoneNumber: standardE164,
            memberSince: new Date(Date.now()),
            lastSeen: new Date(Date.now()),
            activiyFeed: `feed: No new activity to show`,
            pronouns: pronounsTemplate(0, 14),
            coverPhoto: coverImage,
            occupation: faker.lorem.words(2),
            recentActivity: `createdProfile -- ${new Date(Date.now())}`.trim()
          }
        },
        accounts: {
          create: [
            {
              id: seedOneAccountId,
              provider: "custom",
              providerAccountId: `custom:${seedOneAccountId}`,
              type: "auth",
              access_token: accessToken,
              refresh_token: refreshToken,
              session_state: "valid",
              scope: "read, write",
              expires_at: exp.getMilliseconds()
            }
          ]
        },
        sessions: {
          create: [
            {
              expires: new Date(exp.getMilliseconds()),
              sessionToken: accessToken,
              id: seedOneSessionId
            }
          ]
        },
        entries: {
          create: [
            {
              id: seedOneEntryId,
              createdAt: new Date(Date.now()),
              published: true,
              attachments: entryAttachments,
              reactions: {
                set: [
                  reactionTemplate(0, 30),
                  reactionTemplate(0, 30),
                  reactionTemplate(0, 30),
                  reactionTemplate(0, 30),
                  reactionTemplate(0, 30)
                ] as (keyof typeof Reaction)[]
              },
              title: faker.lorem.words(8),
              content: faker.lorem.paragraphs(4, "\n"),
              featuredImage: featuredImage
            }
          ]
        },
        comments: {
          connectOrCreate: {
            where: {
              authorId_entryId: {
                authorId: seedUserId,
                entryId: seedOneEntryId
              }
            },
            create: {
              body: "This is an excellent comment, perhaps the most fantastic comment in the history of comments. ever. all the other comments are trash -- this comment steals the show.",
              createdAt: new Date(Date.now()),
              entryId: seedOneEntryId,
              id: seedOneCommentId,
              attachment: commentAttachment,
              reactions: {
                set: [
                  reactionTemplate(0, 30),
                  reactionTemplate(0, 30),
                  reactionTemplate(0, 30),
                  reactionTemplate(0, 30),
                  reactionTemplate(0, 30)
                ] as (keyof typeof Reaction)[]
              },
              position: "MAIN"
            }
          }
        }
      },
      include: {
        sessions: true,
        accounts: true,
        profile: true,
        entries: true,
        _count: true,
        comments: true
      }
    });
  };
  return seedUser();
}
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type SeedInferred = UnwrapPromise<ReturnType<typeof seed>>;
type SeedPropsInferred<U> = UnwrapPromise<
  typeof seed extends Record<keyof U, infer U>
    ? Record<keyof U, U>
    : UnwrapPromise<typeof seed>
>;

async function main() {
  const prisma = await import("../server/Context/prisma");
  try {
    await prisma.default
      .$connect()
      .then(() => console.log("[seeding]: db connection opened"));
    const s: SeedPropsInferred<{
      props: typeof prisma;
    }> = async (): Promise<SeedInferred> =>
      await seed(prisma.default).then(data => {
        console.log(
          JSON.stringify(
            `[seeding]: success 🎉 created ${data.role} with id ${data.id} and email ${data.email} -- in country ${data.profile?.country} having phone number ${data.profile?.phoneNumber} -- gender: ${data.profile?.gender}; pronouns: ${data.profile?.pronouns} -- authored ${data.entries[0].title} having id ${data.entries[0].id} -- with avatar ${data.image} having reactions to a comment on their entry of ${data.comments[0].reactions}`,
            null,
            2
          )
        );
        return data;
      });
    return await s(prisma.default);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    return await prisma.default
      .$disconnect()
      .then(() => console.log(`[seeding]: db connection closed`));
  }
}

main();
