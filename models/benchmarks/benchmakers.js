const getPhotos = (name) => {
    let minor = []
    for(let i = 1; i <= 5; i++){
        minor.push(`images/${name}/minor/photo${i}.jpg`)
    }

    return {
        card: `images/${name}/card.jpg`,
        banner: `images/${name}/banner.jpg`,
        minor: minor,
    }
    
}

const benchmakers = [
    {
        id: 1,
        name: {
            ru: 'Даррен Уоткинс',
            en: 'Darren Watkins'
        },
        nickname: 'ishowspeed',
        age: 18,
        birthDate: {
            day: 21,
            month: 1,
            year: 2005,
        },
        country: {
            ru: 'США',
            en: 'USA',
        },
        biography: {
            ru: 'Даррен Уоткинс-младший, более известный под псевдонимом IShowSpeed или просто Speed — американский ютубер и интернет-стример. Он известен своими разнообразными прямыми трансляциями, в которых он в основном играет в видеоигры, такие как Valorant, NBA 2K и Fortnite.',
            en: 'Darren Watkins Jr., better known as IShowSpeed ​​or simply Speed, is an American YouTuber and Internet streamer. He is known for his variety of live streams, in which he mainly plays video games such as Valorant, NBA 2K, and Fortnite.',
        },
        photos: getPhotos(''),
        musics: [],
    },
    {
        id: 2,
        name: {
            en: "Jacey Duane Ricardo Onfroy",
            ru: "Джасей Дуэйн Рикардо Онфрой" ,
        },
        nickname: "XXXTentacion",
        age: 20,
        birthDate: {
            day: 23,
            month: 1,
            year: 1998,
        },
        deathDate: {
            day: 18,
            month: 6,
            year: 2018,
        },
        country: {
            ru: " США",
            en: " USA",
        },
        biography: {
            ru: "американский рэпер, автор песен и музыкант. Несмотря на то, что Онфрой являлся противоречивой фигурой из-за множества проблем с законом, у него появилось значительное число молодых последователей, а его короткую карьеру сопровождали всплески популярности[5]. Критики и поклонники часто отмечали его разносторонность, а также положительно оценивали его музыку в стиле трэп, R&B, рок и эмо. ",
            en: " American rapper, songwriter and musician. Although Onfroy was a controversial figure due to his many legal troubles, he developed a significant number of young followers, and his short career was accompanied by bursts of popularity [5]. Critics and fans have often commented on his versatility, as well as positively assessed his music in the style of trap, R&B, rock and emo"
        },
        photos: getPhotos(this.name),
        musics: [],
    },
    {
        id: 3,
        name: {
          ru: "Кёртис Джеймс Джексон III",
          en: "Curtis James Jackson III"
        },
        nickname: "50 Cent",
        age: 47,
        birthDate: {
            day: 6,
            month: 7,
            year: 1975,
        },
        country: {
            ru: "США",
            en: "USA"
        },
        biography: {
            ru: "Рождённый в бедном негритянском районе Саут-Джамейка  . (Куинс, Нью-Йорк), Кёртис Джексон в возрасте 12 лет начал торговать кокаином. После того как он бросает торговлю кокаином, чтобы посвятить себя музыкальной карьере, в него стреляют 9 раз в 2000 году[5]. После выхода сборника Guess Who’s Back?, 50 Cent’а замечает Эминем и подписывает с ним контракт в Interscope Records. С помощью Эминема и Dr. Dre, которые продюсировали его, к нему приходит первый главный коммерческий успех: он становится одним из самых продаваемых исполнителей во всём мире.В 2003 году он основывает лейбл G-Unit Records, на который подписывает группу G-Unit, а также сольно её участников — Young Buck, Ллойд Бэнкс и Tony Yayo.50 Cent много конфликтовал с другими рэперами, включая Ja Rule, Game, Fat Joe и Rick Ross. В качестве актёра 50 Cent известен по роли Хаша в серии фильмов «План побега»  (англ.)рус. с Сильвестром Сталлоне.",
            en: " Born in a poor black area of ​​South Jamaica . (Queens, New York), Curtis Jackson at the age of 12 began dealing cocaine. After quitting cocaine dealing to pursue a music career, he is shot 9 times in 2000[5]. After the release of Guess Who's Back?, 50 Cent was spotted by Eminem and signed with him by Interscope Records. With the help of Eminem and Dr. Dre, who produced it, gets his first major commercial success: he becomes one of the best-selling artists in the world.As an actor, 50 Cent is best known for his role as Hash in the Escape Plan series. with Sylvester Stallone."
        },
        photos: getPhotos(this.name),
        musics: [],
    },
    {
        id: 4,
        name: {
            ru: "Кри́стофер Джо́рдж Лато́р Уо́ллес ",
            en: " Christopher George Latore Wallace",
        },
        nickname: "The Notorious B.I.G.",
        age: 24,
        birthDate: {
            day: 21,
            month: 5,
            year: 1972,
        },
        deathDate: {
            day: 9,
            month: 3,
            year: 1998,
        },
        country: {
            ru: "США",
            en: " USA",
        },
        biography: {
            ru: "Культовая фигура хип-хопа. Начал читать рэп на улицах еще подростком, выступая с местными группами. Первый же альбом Ready to Die, сделал Biggie легендой хип-хопа Восточного побережья. Пластинка в стиле мафиозного рэпа получилась наполненной мрачной лирикой, во многом основанной на реальных фактах из жизни исполнителя. Наряду с песнями, сконцентрированными на преступлениях и жизненных трудностях, альбом содержит также юмор, и искренние песни о любви.Официально B.I.G. считается инициатором Войны побережий – крупнейшего противостояния рэперов в США. Второй альбом, Life After Death, изданный через 16 дней после гибели исполнителя занял 1 место в чарте Billboard 200, а в 2005 году получил статус бриллиантового. Ведущая тема альбома – конфликт с соперниками и многие песни содержат отсылки к другим рэперам, но лирика новой пластинки стала гораздо глубже.Любопытно, что при создании альбома рэпер не записывал тексты песен, а держал их в своей голове. Запись Life After Death продолжалась более полутора лет, постоянно прерываясь из-за арестов исполнителя за хранение оружия и марихуаны, а также на время после аварии, которая приковала его к инвалидному креслу на 3 месяца. Автокатастрофа упоминается в песне Long Kiss Goodnight. Рэпер был застрелен в ходе Войны побережий в 1997 году. Его убийство привлекло внимание общественности к конфликту и привело к примирению обеих сторон. ",
            en: "The iconic figure of hip-hop. Started rapping on the streets as a teenager, performing with local bands. The first album, Ready to Die, made Biggie an East Coast hip-hop legend. The record in the style of mafia rap turned out to be filled with gloomy lyrics, largely based on real facts from the life of the performer. Along with songs focused on crime and hardships, the album also contains humor and sincere love songs."
        },
        photos: getPhotos(this.name),
        musics: [],
    },    
    {
        id: 5,
        name: {
            ru: " Тупак Амару Шакур ",
            en: " Tupac Amaru Shakur",
        },
        nickname: "2pac",
        age: 25,
        birthDate: {
            day: 16,
            month: 6,
            year: 1971,
        },
        deathDate: {
            day: 13,
            month: 7,
            year: 1996,
        },
        country: {
            ru: "США",
            en: "USA ",
        },
        biography: {
            ru: "За свою короткую жизнь он записал больше 70 миллионов сольных дисков, став наиболее популярным и продаваемым музыкантом во все времена. В перечне ста бессмертных музыкантов, который составляется изданием Rolling Stone на основе голосования видных авторитетов в сфере музыкального искусства, он занял 86 позицию. ",
            en: "In his short life, he recorded over 70 million solo discs, becoming the most popular and best-selling musician of all time. In the list of one hundred immortal musicians, which is compiled by Rolling Stone based on a vote of prominent authorities in the field of musical art, he took 86th position."
        },
        photos: getPhotos(this.name),
        musics: [],
    }, 
    {
        id: 6,
        name: {
            ru: "Канье Омари Уэст ",
            en: "Kanye Omari West",
        },
        nickname: "Kanye west",
        age: 45,
        birthDate: {
            day: 8,
            month: 6,
            year: 1977,
        },
        country: {
           ru:"США",
           en:"USA"
        },
        biography: {
            ru:"Уникальное явление не только в американской, но и мировой культуре, талантливый музыкант, популярный рэпер, удачливый бизнесмен, скандалист и мизантроп. Его песни исполняют Бейонсе, Мадонна, Джанет Джексон и другие мировые звезды, а сильные мира сего считают за честь пожать ему руку и пригласить на семейное торжество. Канье женат на одной из самых красивых и сексуальных женщин планеты и даже говорит о планах занять президентское кресло.",
            en:"a unique phenomenon not only in American but also in world culture, a talented musician, popular rapper, successful businessman, brawler and misanthrope. His songs are performed by Beyoncé, Madonna, Janet Jackson and other world stars, and the powers that be consider it an honor to shake his hand and invite him to a family celebration. Kanye is married to one of the most beautiful and sexy women on the planet and even talks about plans to take the presidency.     "
        },
        photos: getPhotos(this.name),
        musics: [],
    },
    {
        id: 7,
        name: {
            ru: "Обри Дрейк Грэм",
            en: "Aubrey Drake Graham",
        },
        nickname: "Drake",
        age: 36,
        birthDate: {
            day: 24,
            month: 10,
            year: 1986,
        },
        country: {
           ru:"Канада",
           en:"Canada",
        },
        biography: {
            ru:"Самый успешный рэпер за всю историю хип-хопа, Дрейк начал свою карьеру с выпуска микстейпов. Всего за несколько лет обычный канадский парень стал рэп-идолом, собрал ворох престижных наград и вошёл в топ самых влиятельных музыкантов миира.",
            en:"The most successful rapper in hip-hop history, Drake began his career by releasing mixtapes. In just a few years, an ordinary Canadian guy became a rap idol, collected a bunch of prestigious awards and entered the top of the most influential musicians in the world.",
        },
        photos: getPhotos(this.name),
        musics: [],
    },  
    {
        id: 8,
        name: {
            ru: "Шон Майкл-Леонард А́ндерсон ",
            en: "Sean Michael-Leonard Anderson",
        },
        nickname: "Big Sean",
        age: 34,
        birthDate: {
            day: 25,
            month: 3,
            year: 1988,
        },
        country:{
            ru:"США",
            en:"USA",
        },
        biography: {
            ru:"Когда мальчику было 3 месяца, он переехал в Детройт, штат Мичиган. Там его воспитанием занимались мать и бабушка Учился в школах Detroit Waldorf и Cass Technical High. Уже в подростковые годы начал рифмовать, участвовал в рэп-баттлах, которые устраивались на хип-хоп-станции WHTD.",
            en:"When the boy was 3 months old, he moved to Detroit, Michigan. There, his mother and grandmother were engaged in his upbringing. He studied at the Detroit Waldorf and Cass Technical High schools. Already in his teenage years, he began to rhyme, participated in rap battles that were held at the hip-hop station WHTD",
        },
        photos: getPhotos(this.name),
        musics: [],
    }, 
    {
        id: 9,
        name: {
            ru: " Джаред Энтони Хиггинс",
            en: "Jared Anthony Higgins",
        },
        nickname: "Juice WRLD",
        age: 21,
        birthDate: {
            day: 2,
            month: 12,
            year: 1998,
        },
        deathDate: {
            day: 8,
            month: 12,
            year: 2019,
        },
        country: {
            ru:"Чикаго,Иллинойс, США",
            en:"Chicago, Illinois, USA",
        },
        biography: {
            ru:"Juice WRLD брал уроки музыки с 4 лет. Он играл на пианино, вдохновившись примером своей матери, а позже увлекся гитарой и ударными. Во время учебы в школе Джаред начал писать рэп, записывал треки на телефон и выкладывал на странице SoundCloud. Парень взял себе псевдоним JuicetheKidd в качестве дани его кумиру Тупаку Шакуру и его роли в фильме «Авторитет» (Juice). В интервью для The Guardian Хиггинс признался, что создавать песни его подтолкнули внутренние переживания, которые он выплескивал в строки композиций.",
            en:"Juice WRLD has been taking music lessons since he was 4 years old. He played the piano, inspired by his mother's example, and later became interested in the guitar and drums. While at school, Jared began to write rap, recorded tracks on his phone and posted on the SoundCloud page. The guy took the pseudonym JuicetheKidd as a tribute to his idol Tupac Shakur and his role in the movie 'Authority' (Juice). In an interview for The Guardian, Higgins admitted that he was inspired to create songs by inner feelings that he poured into the lines of compositions.",
        },
        photos: getPhotos(this.name),
        musics: [],
    }, 
    {
        id: 10,
        name: {
            ru: "Саймир Бизил Вудс ",
            en: "Symer Beasil Woods",
        },
        nickname: "lil uzi vert",
        age: 27,
        birthDate: {
            day: 31,
            month: 7,
            year: 1995,
        },
        country: {
            ru:"Филадельфия, Пенсильвания, США",
            en:"Philadelphia, Pennsylvania, USA",
        },
        biography: {
            ru:"Детство Вудса протекало спокойно, в школьные годы он любил слушать музыку, тогда мальчик отдавал предпочтение песням Майка Джонса, и первый альбом, который купил рэпер, был именно его. Также юноше нравились треки группы Ying Yang Twins, а позднее стал слушать Wiz Khalifa и американского хип-хоп исполнителя Meek Mill, которые и повлияли в дальнейшем на его стиль.",
            en:"Woods's childhood proceeded calmly, during his school years he liked to listen to music, then the boy preferred the songs of Mike Jones, and the first album that the rapper bought was his. The young man also liked the tracks of the Ying Yang Twins, and later began to listen to Wiz Khalifa and the American hip-hop artist Meek Mill, who later influenced his style."
        },
        photos: getPhotos(this.name),
        musics: [],
    },  
    {
        id: 11,
        name: {
            ru: "Майкл Ламар Уайт IV ",
            en: "Michael Lamar White IV",
        },
        nickname: "Trippie Redd ",
        age: 23,
        birthDate: {
            day: 18,
            month: 6,
            year: 1998,
        },
        country: {
            ru:"Кантон, Огайо, США",
            en:"Canton, Ohio, USA",
        },
        biography: {
            ru:"Любовь к музыке возникла после прослушивания композиций Ашанти, Бейонсе, Тупака и Наса. Треки представленных исполнителей часто слушала мама. В юности парень интересовался более «взрослой» музыкой. Он слушал записи: T-Pain, KISS, Gucci Mane, Marilyn Manson и Lil Wayne.",
            en:"The love for music arose after listening to the compositions of Ashanti, Beyoncé, Tupac and Nas. The tracks of the presented performers were often listened to by my mother. In his youth, the guy was interested in more 'adult' music. He listened to records: T-Pain, KISS, Gucci Mane, Marilyn Manson and Lil Wayne."
        },
        photos: getPhotos(this.name),
        musics: [],
    },  {
        id: 12,
        name: {
            ru: "Белкалис Марленис Альма́нзар ",
            en: "Belcalis Marlenis Almanzar",
        },
        nickname: "Cardi B",
        age: 30,
        birthDate: {
            day: 11,
            month: 10,
            year: 1992,
        },
        country: {
            ru:"Вашингтон-Хайтс, Нью-Йорк, США",
            en:"Washington Heights, New York, USA",
        },
        biography: {
            ru:"Cardi B (настоящее имя Белкалис Марленис Альманзар) – популярная рэперша, автор песен и интернет-знаменитость, обладательница множества музыкальных наград (включая девять BET Hip Hop Awards и три MTV Video Music Awards на начало 2019 года) и двух рекордов Гиннеса – за наибольшее число композиций девушки-исполнителя, включенных в «горячую сотню» и за рекордное количество R&B и хип-хоп песен, вошедших в Top 10 хит-парада от журнала Billboard US.",
            en:"Cardi B (real name Belcalis Marlenis Almanzar) is a popular rapper, songwriter and internet celebrity who has won numerous music awards (including nine BET Hip Hop Awards and three MTV Video Music Awards as of early 2019) and two Guinness World Records for the most compositions by a female artist, included in the 'hot hundred' and for a record number of R&B and hip-hop songs included in the Top 10 hit parade from Billboard US magazine.",
        },
        photos: getPhotos(this.name),
        musics: [],
    }, 
    {
        id: 13,
        name: {
            ru: "О́ника Та́ня Мара́ж-Пе́тти ",
            en: "Onika Tanya Maraj-Petty",
        },
        nickname: "Nicki Minaj",
        age: 40,
        birthDate: {
            day: 8,
            month: 12,
            year: 1982,
        },
        country: {
            ru:"Сейнт Джеймс",
            en:"Saint James",
        },
        biography: {
            ru:"Ники Минаж (Nicki Minaj), известная своими пышными формами, диковинными нарядами и яркими образами, на данный момент является богатейшей женщиной-рэпером за всю историю жанра (в 2018 году ее состояние оценивалось в $70 млн.), а также звездой соцсетей. Появившись на свет в Тринидад и Тобаго, она смогла подняться на вершину музыкального Олимпа в США и удерживает эту высокую планку на протяжении нескольких лет подряд. Редкий поклонник жанра не слышал ее «Superbass», «Starships», «Anaconda» или «Chun-Li».",
            en:"Known for her curvaceous figure, outlandish outfits and flamboyant looks, Nicki Minaj is currently the richest female rapper in the history of the genre (in 2018 her fortune was estimated at $70 million) and also a social media star. Born in Trinidad and Tobago, she was able to rise to the top of the musical Olympus in the United States and has held this high bar for several years in a row. A rare fan of the genre has not heard her 'Superbass', 'Starships', 'Anaconda' or 'Chun-Li'.",
        },
        photos: getPhotos(this.name),
        musics: [],
    },
     {
        id: 14,
        name: {
            ru: "Диамонте Киава Валентин Харпер ",
            en: "Diamonte Kiava Valentine Harper",
        },
        nickname: "Saweetie",
        age: 29,
        birthDate: {
            day: 2,
            month: 7,
            year: 1993,
        },
        country: {
            ru:"Санта-Клара, Калифорния, США",
            en:"Santa Clara, California, USA",
        },
        biography: {
            ru:"Saweetie — это американская певица и рэп-исполнительница, которая стала популярной в 2017 году благодаря песне ICY GRL. Сейчас девушка сотрудничает со звукозаписывающим лейблом Warner Bros. Records в партнёрстве с Artistry Worldwide. Артистка имеет многомиллионную аудиторию подписчиков в Instagram. Каждый из её треков на стриминговых сервисах собирает не менее 5 млн прослушиваний.            ",
            en:"Saweetie is an American singer and rapper who became popular in 2017 with the song ICY GRL. Now the girl is collaborating with the record label Warner Bros. Records in partnership with Artistry Worldwide. The artist has a multi-million audience of followers on Instagram. Each of her tracks on streaming services collects at least 5 million plays.",
        },
        photos: getPhotos(this.name),
        musics: [],
    },
     {
        id: 15,
        name: {
            ru: "Меган Джовон Рут Пит ",
            en: "Megan Jovon Ruth Pete",
        },
        nickname: "Megan thee stallion",
        age: 28,
        birthDate: {
            day: 15,
            month: 2,
            year: 1995,
        },
        country: {
            ru:"Сан-Антонио, Техас, США",
            en:"San Antonio, Texas, USA",
        },
        biography: {
            ru:"Яркая и эпатажная звезда американского рэпа, которая не боится смелых экспериментов в творчестве, готова разговаривать со слушателями на самые откровенные темы. Сейчас для певицы нет запретов – во многом артистка выступает как революционер. Например, она подписала контракт со звукозаписывающей продюсерской компанией 300 Entertainment и стала первой женщиной на этом лейбле, исполняющей рэп.",
            en:"a bright and outrageous star of American rap, who is not afraid of bold experiments in creativity, is ready to talk with listeners on the most frank topics. Now there are no prohibitions for the singer - in many ways, the artist acts as a revolutionary. For example, she signed with the record production company 300 Entertainment and became the first woman on that label to rap.",
        },
        photos: getPhotos(this.name),
        musics: [],
    },
     {
        id: 16,
        name: {
            ru: "Цезарь-Су ",
            en: "Caesar Su",
        },
        nickname: "Central cee",
        age: 24,
        birthDate: {
            day: 4,
            month: 6,
            year: 1998,
        },
        country: {
            ru:"Ладброк Гров, Лондон, Великобритания",
            en:"Ludbroke Grove, London, UK",
        },
        biography: {
            ru:"",
            en:"",
        },
        photos: getPhotos(this.name),
        musics: [],
    },      
    {
        id: 17,
        name: {
            ru: "Серхио Джаванни Китченс ",
            en: "Sergio Javanni Kitchens",
        },
        nickname: "Gunna",
        age: 29,
        birthDate: {
            day: 14,
            month: 6,
            year: 1993,
        },
        country: {
            ru:"Колледж Парк, Джорджия, США",
            en:"College Park, Georgia, USA",
        },
        biography: {
            ru:"Он учился в Langston Hughes High School, но школа – это последнее, что волновало парня. В подростковом возрасте он крепко «подсел» на рэп. Молодой человек часами просиживал за прослушиванием треков Cam’ron, Chingy, Outkast и других представителей хип-хопк.",
            en:"He studied at Langston Hughes High School, but school is the last thing on the guy's mind. As a teenager, he was firmly 'hookedon'rap. The young man spent hours listening to tracks by Cam'ron, Chingy, Outkast and other representatives of hip-hopk.",
        },
        photos: getPhotos(this.name),
        musics: [],
    },     
    {
        id: 18,
        name: {
            ru: "Нейве́диус Де́ман Уи́лберн ",
            en: "Neivedius Deman Wilburn",
        },
        nickname: "Future",
        age: 39,
        birthDate: {
            day: 10,
            month: 11,
            year: 1983,
        },
        country: {
            ru:"Атланта, Джорджия, США",
            en:"Atlanta, Georgia, USA",
        },
        biography: {
            ru:"О ранних годах известно не так много информации. Воспитанием будущей звезды занималась мама, но по причине занятости (она работала диспетчером в службе 911), парень жил вместе с бабушкой. Есть информация о том, что будущий артист учился в Колумбийской высшей школе, где обретал образование. Существуют также данные, что в возрасте 15 лет получил огнестрельное ранение в руку.",
            en:"Not much information is known about the early years. Mom was engaged in raising the future star, but due to employment (she worked as a dispatcher in the 911 service), the guy lived with his grandmother. There is information that the future artist studied at the Columbia High School, where he received his education. There is also evidence that at the age of 15 he received a gunshot wound to the arm.",
        },
        photos: getPhotos(this.name),
        musics: [],
    },         
    {
        id: 19,
        name: {
            ru: "Джеймел Морис Демонс ",
            en: "Jamel Maurice Demons",
        },
        nickname: "YNW Melly",
        age: 23,
        birthDate: {
            day: 1,
            month: 5,
            year: 1999,
        },
        country: {
            ru:"Гиффорд, Флорида, США",
            en:"Gifford, Florida, USA",
        },
        biography: {
            ru:"Многие американские рэперы имели проблемы с законом, но YNW Melly погряз в пороке сильнее всех: молодого человека обвиняют в убийстве двух человек, ему грозит смертная казнь. Пока YNW Melly находится в тюрьме, трек «Murder On My Mind», который ошибочно принимают за чистосердечное признание, бьет все мыслимые рекорды по просмотрам и прослушиваниям.",
            en:"Many American rappers have been in trouble with the law, but YNW Melly is the worst in vice: a young man is accused of killing two people, he faces the death penalty. While YNW Melly is in jail, the track 'Murder On My Mind', which is mistaken for a sincere confession, breaks every conceivable record for views and listens.",
        },
        photos: getPhotos(this.name),
        musics: [],
    },
    {
        id: 20,
        name: {
            ru: "Тион Джейден Мерритт ",
            en: "Tion Jaden Merritt",
        },
        nickname: "Lil tjai",
        age: 22,
        birthDate: {
            day: 30,
            month: 4,
            year: 2001,
        },
        country: {
            ru:"Бронкс, Нью-Йорк, США",
            en:"Bronx, New York, USA",
        },
        biography: {
            ru:"Рэпер вырос в Южном Бронксе, и он описывает свой район, как «разнообразный». Там жили граждане различных национальностей. В итоге Тион овладел сразу несколькими языками. В частности, он отлично говорил на испанском языке.",
            en:"The rapper grew up in the South Bronx and describes his neighborhood as 'diverse'. Citizens of various nationalities lived there. As a result, Tion mastered several languages ​​at once. In particular, he spoke excellent Spanish.",
        },
        photos: getPhotos(this.name),
        musics: [],
    }, 
    {
        id: 21,
        name: {
            ru: "Шайя Бин Эйбрахам-Джозеф ",
            en: "Shia Bin Abraham-Joseph",
        },
        nickname: "21 Savage",
        age: 30,
        birthDate: {
            day: 30,
            month: 11,
            year: 1992,
        },
        country: {
            ru:"Англии",
            en:"England",
        },
        biography: {
            ru:"Шайя Бин Эйбрахам-Джозеф родился 22 октября 1992 года в Великобритании. По происхождению гаитянин. Воспитывала его мать, Хезер, которая имеет доминиканское происхождение, помимо него в семье было еще четверо братьев и шесть сестёр[11]; один из братьев погиб в перестрелке[12]. В 7 лет Шайя переехал в Атланту и сразу пошёл в первый класс государственной школы. Будучи учеником седьмого класса, Шайя был отчислен из школы, и ему запрещено было посещать все школы округа Де-Калб, так как он незаконно хранил у себя огнестрельное оружие[13]. Повзрослев, он вступил в преступную группировку Bloods, вместе с которой совершил множество преступных деяний[14]. В 2013 году в свой 21-й день рождения Шайя подвергся нападению вооружённых грабителей, при этом в него стреляли шесть раз, а его лучший друг был застрелен[15]. После этого случая Шайя решил полностью посвятить себя музыке.",
            en:"Shia Bean Abraham-Joseph was born on October 22, 1992 in the UK. Haitian by origin. He was raised by his mother, Heather, who has a Dominican appointment, besides him, there were four more African and sixth sisters in the family[11]; one of those killed in the shootout[12].At the age of 7, Shaya moved to Atlanta and immediately went to the first grade of a public school. As a seventh grade student, Shaya was expelled from school and banned from all schools in DeKalb County because he illegally possessed firearms.[13] Having matured, he joined the Bloods criminal gang, with which he committed many criminal acts[14]. In 2013, on his 21st birthday, Shaya was attacked by armed robbers, shot six times, and his best friend was shot[15]. After this incident, Shaya decided to devote himself entirely to music.            ",
        },
        photos: getPhotos(this.name),
        musics: [],
    },  
    {
        id: 22,
        name: {
            ru: "Джеффри Ламар Уильямс ",
            en: "Jeffery Lamar Williams",
        },
        nickname: "Young Thug",
        age: 31,
        birthDate: {
            day: 16,
            month: 8,
            year: 1991,
        },
        country: {
            ru:"Атланта, Джорджия, США",
            en:"Atlanta, Georgia, USA",
        },
        biography: {
            ru:"Young Thug – американский хип-хоп-исполнитель из Атланты. В биографии артиста много безумных моментов, которыми интересуется общественность. Парень смог выбраться из преступного мира и стать популярным на весь мир.",
            en:"Young Thug is an American hip hop artist from Atlanta. There are many crazy moments in the artist's biography that the public is interested in. The guy was able to get out of the underworld and become popular all over the world.",
        },
        photos: getPhotos(this.name),
        musics: [],
    },                  
    {
        id: 23,
        name: {
            ru: "Баша́р Бара́ка Дже́ксон ",
            en: "Bashar Barakah Jackson",
        },
        nickname: " Pop Smoke",
        age: 0,
        birthDate: {
            day: 20,
            month: 6,
            year: 1999,
        },
        country: {
            ru:"Канарси, Нью-Йорк, США",
            en:"Canarsie, New York, USA",
        },
        biography: {
            ru:"Pop Smoke — американский рэпер, оказавшийся в авангарде нью-йоркской сцены, а после смерти превратившийся в икону движения Black Lives Matter. Став звездой, музыкант всюду ходил с охраной, боясь за свою безопасность. И, как оказалось, не зря.",
            en:"Pop Smoke is an American rapper who was at the forefront of the New York scene and, after his death, became an icon of the Black Lives Matter movement. Having become a star, the musician went everywhere with security, fearing for his safety. And, as it turned out, not in vain.",
        },
        photos: getPhotos(this.name),
        musics: [],
    },                    
    {
        id: 24,
        name: {
            ru: " Густав Элайджа Ар",
            en: " Gustav Elijah Åhr",
        },
        nickname: "Lil Peep",
        age: 21,
        birthDate: {
            day: 1,
            month: 11,
            year: 1996,
        },
        deathDate: {
            day: 15,
            month: 11,
            year: 2017,
        },
        country: {
            ru: "Аллентаун, Пенсильвания, США",
            en: "Allentown, Pennsylvania, USA",
        },
        biography: {
            ru:"Густав Ар, знакомый тинейджерам и фанатам рэпа как Lil Peep, кажется, запрограммировал себя на короткую, как вспышка молнии, жизнь. Девиз «Греби деньги, умри молодым» набит на его челе. Поклонники обозначали американского вокалиста как «соунд клауд рэппера», а музыкальный стиль как микс рэпа и эмо-трэпа. Но сам исполнитель не утруждал себя «чистотой» жанра и смешивал стили так, как подсказывало вдохновение.",
            en:"Gustav Ar, known to teens and rap fans as Lil Peep, seems to have programmed himself for a life as short as a flash of lightning. The motto 'Row money, die young' is stuffed on his forehead. Fans referred to the American vocalist as a 'sound cloud rapper', and the musical style as a mix of rap and emo trap. But the performer himself did not bother with the 'purity' of the genre and mixed styles as inspiration suggested.",
        },
        photos: getPhotos(this.name),
        musics: [],
    },                                     
    {
        id: 25,
        name: {
            ru: "Майлс Паркс МакКоллум",
            en: "Miles Parks McCollum",
        },
        nickname: "Lil Yachty ",
        age: 25,
        birthDate: {
            day: 23,
            month: 8,
            year: 1997,
        },
        country: {
            ru:"Мейблтон, Джорджия, США",
            en:"Mableton, Georgia, USA",
        },
        biography: {
            ru: "Музыкальная сцена Атланты практически каждый год пополняется новыми и интересными лицами. Lil Yachty — один из последних в списке новоприбывших. Рэпер выделяется не только яркой прической, но и собственным музыкальным стилем, который он называет bubblegum trap.Рэпер стал популярным благодаря возможностям социальных сетей. Хотя, как и любой житель Атланты, Lil Yachty «хайпонул» на бешеной продуктивности. Что не клип, то «пушка»",
            en: "The Atlanta music scene is replenished with new and interesting faces almost every year. Lil Yachty is one of the latest on the list of new arrivals. The rapper stands out not only for his bright hair, but also for his own musical style, which he calls bubblegum trap.The rapper became popular thanks to the possibilities of social networks. Although, like any resident of Atlanta, Lil Yachty 'hyped' on crazy productivity. What is not a clip, then a 'gun'            ",
        },
        photos: getPhotos(this.name),
        musics: [],
    },                    
    {
        id: 26,
        name: {
            ru: "Дайвон Дакуан Беннетт ",
            en: "Dayvon Daquan Bennett",
        },
        nickname: "King Von",
        age: 26,
        birthDate: {
            day: 9,
            month: 8,
            year: 1994,
        },
        deathDate: {
            day: 6,
            month: 11,
            year: 2020,
        },
        country: {
            ru:"Чикаго, Иллинойс, США",
            en:"Chicago, Illinois, USA",
        },
        biography: {
            ru:"Дэйвон Дакуан Беннетт, более известен под своим псевдонимом King Von, — американский рэпер из Чикаго, Иллинойс. Он был подписан на лейблы Only the Family и Empire Distribution. Наиболее известен своей серией синглов «Crazy Story» и треком «Took Her to the O»",
            en:"Davon Daquan Bennett, better known by his stage name King Von, is an American rapper from Chicago, Illinois. He was signed to Only the Family and Empire Distribution. He is best known for his 'Crazy Story' series of singles and the track 'Took Her to the O'",
        },
        photos: getPhotos(this.name),
        musics: [],
    },                    
    {
        id: 27,
        name: {
            ru: " Жак Берман Уэ́бстер II",
            en: "Jacques Berman Webster II",
        },
        nickname: " Travis Scott",
        age: 31,
        birthDate: {
            day: 30,
            month: 4,
            year: 1991,
        },
        country: {
            ru:"Хьюстон, Техас, США",
            en:"Houston, Texas, USA",
        },
        biography: {
            ru:"Авторитетные музыкальные издания называют рэпера Трэвиса Скотта не иначе как королем хаоса, и это не случайно. Американский исполнитель не раз оказывался в руках полиции, причем задерживали музыканта прямо на сцене, обвиняя в организации беспорядков. Взрывная энергетика шоу Скотта и невообразимые спецэффекты с пол-оборота заводят толпу, но именно за это его любят фанаты. Поклонников своего творчества рэпер именует рейджерами",
            en:"Authoritative music publications call rapper Travis Scott nothing less than the king of chaos, and this is no coincidence. The American performer more than once found himself in the hands of the police, and the musician was detained right on the stage, accusing him of organizing riots. The explosive energy of Scott's show and the unimaginable special effects turn the crowd on half a turn, but that's what fans love him for. The rapper calls his fans the Rangers.",
        },
        photos: getPhotos(this.name),
        musics: [],
    },                    
    {
        id: 28,
        name: {
            ru: "Раким Ателастон Майерс",
            en: "Rakim Atelaston Myers",
        },
        nickname: "ASAP Rocky ",
        age: 34,
        birthDate: {
            day: 3,
            month: 10,
            year: 1988
        },
        country: {
            ru:"Гарлем, Нью-Йорк, США",
            en:"Harlem, New York, USA",
        },
        biography: {
            ru:"ASAP Rocky, он же Эйсап Роки, еще на заре карьеры сумел громко заявить о себе. В последующие годы выходец из нью-йоркского Гарлема стал значимой фигурой хип-хоп-культуры не только на родине, в США, но и во всем мире.",
            en:"ASAP Rocky, aka ASAP Rocky, at the dawn of his career, managed to loudly declare himself. In subsequent years, a native of New York Harlem became a significant figure in hip-hop culture, not only in his homeland, in the United States, but throughout the world.",
        },
        photos: getPhotos(this.name),
        musics: [],
    },                    
    {
        id: 29,
        name: {
            ru: "А́лиан Дамала Тиа́м  ",
            en: "Aliaune Damala Thiam",
        },
        nickname: "Akon",
        age: 49,
        birthDate: {
            day: 16,
            month: 4,
            year: 1973,
        },
        country: {
            ru:"Сент-Луис, Миссури, США",
            en:"St. Louis, Missouri, USA",
        },
        biography: {
            ru:"Akon — американский хип-хоп-исполнитель, продюсер, автор песен. Артист не раз был номинирован на различные музыкальные награды, в том числе становился лучшим R&B/Soul исполнителем среди мужчин. За музыкальную карьеру сотрудничал со многими известными артистами.",
            en:"Akon is an American hip hop artist, producer, and songwriter. The artist has repeatedly been nominated for various music awards, including becoming the best male R&B / Soul artist. During his musical career, he collaborated with many famous artists"i,
        },
        photos: getPhotos(this.name),
        musics: [],
    },   
    {
        id: 30,
        name: {
            ru: "Келвин Кордозар Бро́дус-младший ",
            en: "Calvin Cordozar Broadus Jr",
        },
        nickname: "Snoop Dogg",
        age: 51,
        birthDate: {
            day: 20,
            month: 10,
            year: 1971,
        },
        country: {
            ru:"Лонг-Биче, Калифорния, США",
            en:"Long Beach, California, USA",
        },
        biography: {
            ru:"Snoop Dogg – неординарный рэпер и выдающийся музыкант, сумевший стать настоящей легендой в своем жанре. Сегодня он живой символ всей музыкальной индустрии США и целого направления в музыке.",
            en:"Snoop Dogg - an extraordinary rapper and an outstanding musician who managed to become a real legend in his genre. Today he is a living symbol of the entire US music industry and a whole trend in music.",
        },
        photos: getPhotos(this.name),
        musics: [],
    },                                                                                                                                                                                            
]

module.exports = benchmakers