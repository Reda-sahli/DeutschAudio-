/**
 * DeutschAudio Portal - Central Data Source
 * 
 * -------------------------------------------------------------
 * Spektrum Deutsch A1+ (Kapitel 1 bis 12)
 * Complete coursebook audio structure with German & English data.
 * -------------------------------------------------------------
 */

const DEUTSCH_PORTAL_DATA = {
  levels: [
    {
      id: "A1",
      code: "A1",
      name: "A1 · Einstieg & Anfänger",
      nameEn: "A1 · Beginner Level",
      badge: "A1 Anfänger",
      badgeEn: "A1 Beginner",
      badgeColor: "emerald",
      colorClass: "bg-emerald-500",
      lightColorClass: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
      description: "Elementare Sprachverwendung: 12 vollständige Kapitel von Begrüßung und Einkaufen bis Familie, Gesundheit und Feste.",
      descriptionEn: "Basic language proficiency: 12 complete chapters from greetings and shopping to family, health, and celebrations.",
      isUpcoming: false,
      textbooks: [
        {
          id: "spektrum-a1",
          title: "Spektrum Deutsch A1+",
          titleEn: "Spektrum Deutsch A1+",
          subtitle: "Integriertes Kurs- und Arbeitsbuch für DaF (12 Kapitel)",
          subtitleEn: "Integrated Coursebook & Workbook for German as a Foreign Language (12 Chapters)",
          edition: "Ausgabe 2024 / 2. Auflage",
          editionEn: "2024 Edition / 2nd Edition",
          coverBg: "from-emerald-600 to-teal-700",
          pdfUrl: "books/A1/Spektrum%20Deutsch%20A1%20Kurs-%20und%20Arbeitsbuch.pdf",
          pdfFilename: "Spektrum Deutsch A1 Kurs- und Arbeitsbuch.pdf",
          pdfTitle: "Spektrum Deutsch A1+ Lehrbuch (PDF)",
          pdfTitleEn: "Spektrum Deutsch A1+ Coursebook (PDF)",
          sections: [
            {
              id: "a1-teil-1",
              title: "Teil 1: Kapitel 1 bis 6",
              titleEn: "Part 1: Chapters 1 to 6",
              subtitle: "Erste Schritte, Alltag, Wohnen & Berufe",
              subtitleEn: "First steps, daily life, living & work",
              chapters: [
                {
                  id: "a1-k1",
                  number: 1,
                  title: "Kapitel 1: Erste Kontakte & Begrüßung",
                  titleEn: "Chapter 1: First Contacts & Greetings",
                  theme: "Thema: Begrüßung, Alphabet, Herkunft, Buchstabieren & Zahlen 0-20",
                  themeEn: "Topic: Greetings, alphabet, origin, spelling & numbers 0-20",
                  tracks: [
                    {
                      id: "a1-k1-02",
                      trackNum: "02",
                      title: "Track 02: Begrüßung & Sich vorstellen",
                      titleEn: "Track 02: Greetings & Introducing Yourself",
                      context: "Spektrum A1.1 · Kursbuch S. 10",
                      contextEn: "Spektrum A1.1 · Coursebook p. 10",
                      type: "Dialog",
                      duration: "00:42",
                      seconds: 42,
                      audioSrc: "audio/A1/Kapitel_01/02_spektrum_a1-1.mp3",
                      transcript: "– Guten Tag! Mein Name ist Jan Müller. Und wie heißen Sie?\n– Guten Tag, Herr Müller. Ich heiße Elena Rossi.\n– Freut mich, Frau Rossi! Woher kommen Sie?\n– Ich komme aus Italien, aus Mailand. Und Sie?",
                      transcriptEn: "– Good day! My name is Jan Müller. And what is your name?\n– Good day, Mr. Müller. My name is Elena Rossi.\n– Nice to meet you, Ms. Rossi! Where are you from?\n– I am from Italy, from Milan. And you?"
                    },
                    {
                      id: "a1-k1-03",
                      trackNum: "03",
                      title: "Track 03: Das Alphabet & Buchstabieren",
                      titleEn: "Track 03: The Alphabet & Spelling",
                      context: "Spektrum A1.1 · Phonetik S. 11",
                      contextEn: "Spektrum A1.1 · Phonetics p. 11",
                      type: "Phonetik",
                      duration: "00:39",
                      seconds: 39,
                      audioSrc: "audio/A1/Kapitel_01/03_spektrum_a1-1.mp3",
                      transcript: "A wie Anton, B wie Berta, C wie Cäsar, D wie Dora, E wie Emil... Hören Sie zu und sprechen Sie nach.",
                      transcriptEn: "A for Anton, B for Berta, C for Cäsar, D for Dora, E for Emil... Listen and repeat."
                    },
                    {
                      id: "a1-k1-04",
                      trackNum: "04",
                      title: "Track 04: Herkunft & Sprachen hören",
                      titleEn: "Track 04: Origin & Languages Listening",
                      context: "Spektrum A1.1 · Kursbuch S. 12",
                      contextEn: "Spektrum A1.1 · Coursebook p. 12",
                      type: "Hörtext",
                      duration: "00:41",
                      seconds: 41,
                      audioSrc: "audio/A1/Kapitel_01/04_spektrum_a1-1.mp3",
                      transcript: "Woher kommen die Personen? Ordnen Sie die Länder zu: Deutschland, Österreich, die Schweiz, Spanien und Polen.",
                      transcriptEn: "Where do these people come from? Match the countries: Germany, Austria, Switzerland, Spain, and Poland."
                    },
                    {
                      id: "a1-k1-05",
                      trackNum: "05",
                      title: "Track 05: Zahlen von 0 bis 20",
                      titleEn: "Track 05: Numbers from 0 to 20",
                      context: "Spektrum A1.1 · Wortschatz S. 14",
                      contextEn: "Spektrum A1.1 · Vocabulary p. 14",
                      type: "Wortschatz",
                      duration: "01:38",
                      seconds: 98,
                      audioSrc: "audio/A1/Kapitel_01/05_spektrum_a1-1.mp3",
                      transcript: "Null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf, dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn, zwanzig.",
                      transcriptEn: "Zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty."
                    },
                    {
                      id: "a1-k1-06",
                      trackNum: "06",
                      title: "Track 06: Dialoge im Deutschkurs",
                      titleEn: "Track 06: Dialogues in German Class",
                      context: "Spektrum A1.1 · Kursbuch S. 15",
                      contextEn: "Spektrum A1.1 · Coursebook p. 15",
                      type: "Dialog",
                      duration: "00:38",
                      seconds: 38,
                      audioSrc: "audio/A1/Kapitel_01/06_spektrum_a1-1.mp3",
                      transcript: "– Wie heißt das auf Deutsch?\n– Das ist ein Buch.\n– Und wie schreibt man das?\n– B-U-C-H.",
                      transcriptEn: "– What is this called in German?\n– That is a book.\n– And how do you spell it?\n– B-U-C-H."
                    },
                    {
                      id: "a1-k1-07",
                      trackNum: "07",
                      title: "Track 07: Visitenkarten & Kontaktdaten",
                      titleEn: "Track 07: Business Cards & Contact Data",
                      context: "Spektrum A1.1 · Arbeitsbuch S. 8",
                      contextEn: "Spektrum A1.1 · Workbook p. 8",
                      type: "Übung",
                      duration: "00:47",
                      seconds: 47,
                      audioSrc: "audio/A1/Kapitel_01/07_spektrum_a1-1.mp3",
                      transcript: "Hören Sie die Telefonnummern und E-Mail-Adressen und ergänzen Sie die Lücken auf den Visitenkarten.",
                      transcriptEn: "Listen to the phone numbers and email addresses and fill in the blanks on the business cards."
                    },
                    {
                      id: "a1-k1-08",
                      trackNum: "08",
                      title: "Track 08: Telefongespräch am Empfang",
                      titleEn: "Track 08: Phone Conversation at Reception",
                      context: "Spektrum A1.1 · Kursbuch S. 16",
                      contextEn: "Spektrum A1.1 · Coursebook p. 16",
                      type: "Dialog",
                      duration: "01:15",
                      seconds: 75,
                      audioSrc: "audio/A1/Kapitel_01/08_spektrum_a1-1.mp3",
                      transcript: "– Sprachenschule Dialog, guten Morgen!\n– Guten Morgen, hier spricht Schneider. Wann beginnt der nächste A1-Kurs?\n– Der Kurs beginnt am Montag um 9 Uhr.",
                      transcriptEn: "– Languages School Dialog, good morning!\n– Good morning, Schneider speaking. When does the next A1 course start?\n– The course starts on Monday at 9:00 AM."
                    },
                    {
                      id: "a1-k1-10",
                      trackNum: "10",
                      title: "Track 10: Ausführlicher Hörtext & Dialoge",
                      titleEn: "Track 10: In-depth Listening & Dialogues",
                      context: "Spektrum A1.1 · Hörverstehen S. 18",
                      contextEn: "Spektrum A1.1 · Listening p. 18",
                      type: "Hörtext",
                      duration: "03:06",
                      seconds: 186,
                      audioSrc: "audio/A1/Kapitel_01/10_spektrum_a1-1.mp3",
                      transcript: "Drei Personen stellen sich vor: Name, Beruf, Wohnort und Hobbys. Kreuzen Sie die richtigen Aussagen an.",
                      transcriptEn: "Three people introduce themselves: name, profession, city of residence, and hobbies. Tick the correct statements."
                    },
                    {
                      id: "a1-k1-12",
                      trackNum: "12",
                      title: "Track 12: Phonetik & Satzmelodie",
                      titleEn: "Track 12: Phonetics & Intonation",
                      context: "Spektrum A1.1 · Phonetik S. 19",
                      contextEn: "Spektrum A1.1 · Phonetics p. 19",
                      type: "Phonetik",
                      duration: "00:52",
                      seconds: 52,
                      audioSrc: "audio/A1/Kapitel_01/12_spektrum_a1-1.mp3",
                      transcript: "Frage oder Aussage? Hören Sie auf die Satzmelodie am Ende des Satzes: Geht die Stimme nach oben oder nach unten?",
                      transcriptEn: "Question or statement? Listen to the sentence intonation at the end: Does the voice pitch rise or fall?"
                    },
                    {
                      id: "a1-k1-13",
                      trackNum: "13",
                      title: "Track 13: Wortschatz & Redemittel Kapitel 1",
                      titleEn: "Track 13: Vocabulary & Phrases Chapter 1",
                      context: "Spektrum A1.1 · Wortschatz S. 20",
                      contextEn: "Spektrum A1.1 · Vocabulary p. 20",
                      type: "Wortschatz",
                      duration: "00:35",
                      seconds: 35,
                      audioSrc: "audio/A1/Kapitel_01/13_spektrum_a1-1.mp3",
                      transcript: "Wichtige Redemittel: Auf Wiedersehen! Bis bald! Einen schönen Tag noch! Danke, gleichfalls!",
                      transcriptEn: "Important phrases: Goodbye! See you soon! Have a nice day! Thanks, you too!"
                    },
                    {
                      id: "a1-k1-14",
                      trackNum: "14",
                      title: "Track 14: Prüfungstraining Kapitel 1",
                      titleEn: "Track 14: Exam Training Chapter 1",
                      context: "Spektrum A1.1 · Test S. 21",
                      contextEn: "Spektrum A1.1 · Test p. 21",
                      type: "Hörtext",
                      duration: "01:30",
                      seconds: 90,
                      audioSrc: "audio/A1/Kapitel_01/14_spektrum_a1-1.mp3",
                      transcript: "Abschlusstest zu Kapitel 1. Hören Sie die kurzen Szenen und wählen Sie die richtige Lösung A, B oder C.",
                      transcriptEn: "Final test for Chapter 1. Listen to the short scenes and select the correct option A, B, or C."
                    }
                  ]
                },
                {
                  id: "a1-k2",
                  number: 2,
                  title: "Kapitel 2: Gegenstände, Im Café & Restaurant",
                  titleEn: "Chapter 2: Objects, In the Café & Restaurant",
                  theme: "Thema: Bestellen, Lebensmittel, Preise, Zahlen 21-1000 & Wörter im Kursraum",
                  themeEn: "Topic: Ordering, food, prices, numbers 21-1000 & classroom objects",
                  tracks: [
                    {
                      id: "a1-k2-01",
                      trackNum: "2.01",
                      title: "Bestellung im Wiener Kaffeehaus",
                      titleEn: "Ordering at a Viennese Coffee House",
                      context: "Spektrum A1.1 · Kursbuch S. 24",
                      contextEn: "Spektrum A1.1 · Coursebook p. 24",
                      type: "Dialog",
                      duration: "01:32",
                      seconds: 92,
                      audioSrc: "audio/A1/Kapitel_02/2.01_Wiener_Kaffeehaus.mp3",
                      transcript: "– Guten Tag, was darf ich Ihnen bringen?\n– Ich hätte gerne eine Melange und ein Stück Sachertorte, bitte.\n– Sehr gerne. Kommt sofort!",
                      transcriptEn: "– Good day, what may I bring you?\n– I would like a Viennese Melange coffee and a slice of Sachertorte, please.\n– With pleasure. Coming right up!"
                    },
                    {
                      id: "a1-k2-02",
                      trackNum: "2.02",
                      title: "Zahlen 20 bis 100 & Euro-Preise",
                      titleEn: "Numbers 20 to 100 & Euro Prices",
                      context: "Spektrum A1.1 · Kursbuch S. 26",
                      contextEn: "Spektrum A1.1 · Coursebook p. 26",
                      type: "Wortschatz",
                      duration: "01:15",
                      seconds: 75,
                      audioSrc: "audio/A1/Kapitel_02/2.02_Preise.mp3",
                      transcript: "Was kostet das? Ein Kaffee kostet drei Euro fünfzig. Ein Apfelstrudel kostet vier Euro achtzig. Zusammen macht das acht Euro dreißig.",
                      transcriptEn: "How much is that? A coffee costs 3.50 euros. An apple strudel costs 4.80 euros. Together that is 8.30 euros."
                    },
                    {
                      id: "a1-k2-03",
                      trackNum: "2.03",
                      title: "Einkaufsdialog auf dem Wochenmarkt",
                      titleEn: "Shopping Dialogue at the Weekly Market",
                      context: "Spektrum A1.1 · Kursbuch S. 28",
                      contextEn: "Spektrum A1.1 · Coursebook p. 28",
                      type: "Dialog",
                      duration: "01:50",
                      seconds: 110,
                      audioSrc: "audio/A1/Kapitel_02/2.03_Wochenmarkt.mp3",
                      transcript: "– Wer ist an der Reihe?\n– Ich bitte! Ich brauche ein Kilo Tomaten und zwei Gurken.\n– Möchten Sie sonst noch etwas?\n– Ja, haben Sie frische Erdbeeren?",
                      transcriptEn: "– Who is next in line?\n– Me, please! I need a kilo of tomatoes and two cucumbers.\n– Would you like anything else?\n– Yes, do you have fresh strawberries?"
                    },
                    {
                      id: "a1-k2-04",
                      trackNum: "2.04",
                      title: "Phonetik: Umlaute Ä, Ö, Ü",
                      titleEn: "Phonetics: German Umlauts Ä, Ö, Ü",
                      context: "Spektrum A1.1 · Phonetik S. 30",
                      contextEn: "Spektrum A1.1 · Phonetics p. 30",
                      type: "Phonetik",
                      duration: "01:05",
                      seconds: 65,
                      audioSrc: "audio/A1/Kapitel_02/2.04_Umlaute.mp3",
                      transcript: "Äpfel – Öl – Brötchen – Käse – Frühling. Hören Sie genau auf den Unterschied zwischen A und Ä, O und Ö, U und Ü.",
                      transcriptEn: "Apples – Oil – Bread rolls – Cheese – Spring. Listen carefully to the difference between A and Ä, O and Ö, U and Ü."
                    }
                  ]
                },
                {
                  id: "a1-k3",
                  number: 3,
                  title: "Kapitel 3: Wohnen, Räume & Möbel",
                  titleEn: "Chapter 3: Living, Rooms & Furniture",
                  theme: "Thema: Zimmer beschreiben, Möbel kaufen, Gefallen ausdrücken & Farben",
                  themeEn: "Topic: Describing rooms, buying furniture, expressing likes & colors",
                  tracks: [
                    {
                      id: "a1-k3-01",
                      trackNum: "3.01",
                      title: "Wohnungsbesichtigung in München",
                      titleEn: "Apartment Viewing in Munich",
                      context: "Spektrum A1.1 · Kursbuch S. 36",
                      contextEn: "Spektrum A1.1 · Coursebook p. 36",
                      type: "Hörtext",
                      duration: "02:05",
                      seconds: 125,
                      audioSrc: "audio/A1/Kapitel_03/3.01_Wohnungsbesichtigung.mp3",
                      transcript: "Hier ist das Wohnzimmer. Es ist sehr hell und hat einen schönen Südbalkon. Die Küche ist neu renoviert mit moderner Einbauküche.",
                      transcriptEn: "Here is the living room. It is very bright and has a lovely south-facing balcony. The kitchen is newly renovated with a modern fitted kitchen."
                    },
                    {
                      id: "a1-k3-02",
                      trackNum: "3.02",
                      title: "Dialog im Möbelgeschäft",
                      titleEn: "Dialogue at the Furniture Store",
                      context: "Spektrum A1.1 · Kursbuch S. 38",
                      contextEn: "Spektrum A1.1 · Coursebook p. 38",
                      type: "Dialog",
                      duration: "01:28",
                      seconds: 88,
                      audioSrc: "audio/A1/Kapitel_03/3.02_Moebelhaus.mp3",
                      transcript: "– Wie gefällt dir dieser Tisch?\n– Der Esstisch ist modern, aber vielleicht etwas zu groß für unsere Küche.\n– Schau mal dort, der Holztisch ist kleiner!",
                      transcriptEn: "– How do you like this table?\n– The dining table is modern, but perhaps a bit too large for our kitchen.\n– Look over there, the wooden table is smaller!"
                    }
                  ]
                },
                {
                  id: "a1-k4",
                  number: 4,
                  title: "Kapitel 4: Mein Tag & Freizeitaktivitäten",
                  titleEn: "Chapter 4: My Day & Free Time Activities",
                  theme: "Thema: Uhrzeiten (offiziell/inoffiziell), Tagesablauf, Hobbys & Wochentage",
                  themeEn: "Topic: Telling time (official/casual), daily routine, hobbies & weekdays",
                  tracks: [
                    {
                      id: "a1-k4-01",
                      trackNum: "4.01",
                      title: "Uhrzeiten hören: Viertel vor und nach",
                      titleEn: "Listening to Times: Quarter to and Quarter past",
                      context: "Spektrum A1.1 · Kursbuch S. 48",
                      contextEn: "Spektrum A1.1 · Coursebook p. 48",
                      type: "Übung",
                      duration: "01:35",
                      seconds: 95,
                      audioSrc: "audio/A1/Kapitel_04/4.01_Uhrzeiten.mp3",
                      transcript: "Wie spät ist es? Es ist Viertel vor acht. Der Zug fährt um zwanzig nach neun ab. Wann stehst du morgens auf?",
                      transcriptEn: "What time is it? It is quarter to eight. The train departs at twenty past nine. When do you get up in the morning?"
                    },
                    {
                      id: "a1-k4-02",
                      trackNum: "4.02",
                      title: "Interview: Ein typischer Tagesablauf",
                      titleEn: "Interview: A Typical Daily Routine",
                      context: "Spektrum A1.1 · Kursbuch S. 50",
                      contextEn: "Spektrum A1.1 · Coursebook p. 50",
                      type: "Hörtext",
                      duration: "02:20",
                      seconds: 140,
                      audioSrc: "audio/A1/Kapitel_04/4.02_Tagesablauf.mp3",
                      transcript: "Mein Tag beginnt früh um sechs Uhr. Zuerst trinke ich einen Kaffee, dann fahre ich mit der U-Bahn zur Arbeit. Nach Feierabend mache ich Sport.",
                      transcriptEn: "My day starts early at six o'clock. First I drink a coffee, then I take the subway to work. After work, I do sports."
                    }
                  ]
                },
                {
                  id: "a1-k5",
                  number: 5,
                  title: "Kapitel 5: Arbeit, Berufe & Termine",
                  titleEn: "Chapter 5: Work, Professions & Appointments",
                  theme: "Thema: Berufsalltag, Telefonate im Büro, Kalender & Termine vereinbaren",
                  themeEn: "Topic: Work life, office phone calls, calendar & scheduling appointments",
                  tracks: [
                    {
                      id: "a1-k5-01",
                      trackNum: "5.01",
                      title: "Telefongespräch: Einen Termin vereinbaren",
                      titleEn: "Phone Call: Making an Appointment",
                      context: "Spektrum A1.1 · Kursbuch S. 60",
                      contextEn: "Spektrum A1.1 · Coursebook p. 60",
                      type: "Dialog",
                      duration: "01:40",
                      seconds: 100,
                      audioSrc: "audio/A1/Kapitel_05/5.01_Termin_Telefon.mp3",
                      transcript: "– Guten Tag, Praxis Dr. Weber, Schmidt am Apparat.\n– Guten Tag, hier spricht Meier. Ich hätte gerne einen Termin nächste Woche.\n– Passt Ihnen Dienstag um zehn Uhr dreißig?",
                      transcriptEn: "– Good day, Dr. Weber's clinic, Schmidt speaking.\n– Good day, this is Meier. I would like an appointment next week.\n– Does Tuesday at 10:30 AM suit you?"
                    },
                    {
                      id: "a1-k5-02",
                      trackNum: "5.02",
                      title: "Berufe raten: Vier Personen erzählen",
                      titleEn: "Guess the Profession: Four People Speak",
                      context: "Spektrum A1.1 · Kursbuch S. 62",
                      contextEn: "Spektrum A1.1 · Coursebook p. 62",
                      type: "Hörtext",
                      duration: "02:35",
                      seconds: 155,
                      audioSrc: "audio/A1/Kapitel_05/5.02_Berufe_Raten.mp3",
                      transcript: "Person 1: Ich arbeite viel am Computer und programmiere Software. Person 2: Ich arbeite im Krankenhaus und helfe kranken Menschen.",
                      transcriptEn: "Person 1: I work a lot on the computer and write software. Person 2: I work in the hospital and help sick people."
                    }
                  ]
                },
                {
                  id: "a1-k6",
                  number: 6,
                  title: "Kapitel 6: Unterwegs in der Stadt & Mobilität",
                  titleEn: "Chapter 6: Around Town & Mobility",
                  theme: "Thema: Wegbeschreibung, Verkehrsmittel, Durchsagen am Hauptbahnhof",
                  themeEn: "Topic: Asking for directions, transport, station announcements",
                  tracks: [
                    {
                      id: "a1-k6-01",
                      trackNum: "6.01",
                      title: "Durchsagen am Bahnhof: Gleisänderung",
                      titleEn: "Train Station Announcement: Platform Change",
                      context: "Spektrum A1.1 · Kursbuch S. 72",
                      contextEn: "Spektrum A1.1 · Coursebook p. 72",
                      type: "Hörtext",
                      duration: "01:10",
                      seconds: 70,
                      audioSrc: "audio/A1/Kapitel_06/6.01_Bahnhofsdurchsage.mp3",
                      transcript: "Achtung an Gleis 4: ICE 572 nach Frankfurt über Mannheim fährt heute abweichend von Gleis 7 ein. Bitte Vorsicht bei der Einfahrt des Zuges!",
                      transcriptEn: "Attention on Platform 4: ICE 572 to Frankfurt via Mannheim will arrive today on platform 7 instead. Please stand clear as the train approaches!"
                    },
                    {
                      id: "a1-k6-02",
                      trackNum: "6.02",
                      title: "Dialog: Entschuldigung, wo ist das Museum?",
                      titleEn: "Dialogue: Excuse me, where is the museum?",
                      context: "Spektrum A1.1 · Kursbuch S. 74",
                      contextEn: "Spektrum A1.1 · Coursebook p. 74",
                      type: "Dialog",
                      duration: "01:25",
                      seconds: 85,
                      audioSrc: "audio/A1/Kapitel_06/6.02_Wegbeschreibung.mp3",
                      transcript: "– Verzeihung, wie komme ich zum Kunstmuseum?\n– Gehen Sie hier geradeaus bis zur Ampel, dann biegen Sie links ab. Nach 200 Metern sehen Sie das Museum auf der rechten Seite.",
                      transcriptEn: "– Excuse me, how do I get to the art museum?\n– Go straight ahead until the traffic light, then turn left. After 200 meters, you will see the museum on the right."
                    }
                  ]
                }
              ]
            },
            {
              id: "a1-teil-2",
              title: "Teil 2: Kapitel 7 bis 12",
              titleEn: "Part 2: Chapters 7 to 12",
              subtitle: "Reisen, Essen, Gesundheit, Familie & Feste",
              subtitleEn: "Travel, food, health, family & celebrations",
              chapters: [
                {
                  id: "a1-k7",
                  number: 7,
                  title: "Kapitel 7: Reisen, Urlaub & Unterkünfte",
                  titleEn: "Chapter 7: Travel, Vacations & Accommodations",
                  theme: "Thema: Urlaubsziele, Hotelbuchung, Wetterbericht & Postkarten",
                  themeEn: "Topic: Vacation destinations, hotel check-in, weather forecast",
                  tracks: [
                    {
                      id: "a1-k7-01",
                      trackNum: "7.01",
                      title: "Hotelrezeption: Check-in & Zimmerkarte",
                      titleEn: "Hotel Reception: Check-in & Room Key",
                      context: "Spektrum A1.2 · Kursbuch S. 84",
                      contextEn: "Spektrum A1.2 · Coursebook p. 84",
                      type: "Dialog",
                      duration: "01:45",
                      seconds: 105,
                      audioSrc: "audio/A1/Kapitel_07/7.01_Hotel_Checkin.mp3",
                      transcript: "– Guten Tag, ich habe ein Doppelzimmer auf den Namen Weber reserviert.\n– Guten Tag Herr Weber. Ja, für drei Nächte inklusive Frühstück. Hier ist Ihre Zimmerkarte für Zimmer 214.",
                      transcriptEn: "– Good day, I have reserved a double room under the name Weber.\n– Good day Mr. Weber. Yes, for three nights including breakfast. Here is your keycard for room 214."
                    },
                    {
                      id: "a1-k7-02",
                      trackNum: "7.02",
                      title: "Wetterbericht für Deutschland & die Alpen",
                      titleEn: "Weather Forecast for Germany & the Alps",
                      context: "Spektrum A1.2 · Kursbuch S. 86",
                      contextEn: "Spektrum A1.2 · Coursebook p. 86",
                      type: "Hörtext",
                      duration: "02:10",
                      seconds: 130,
                      audioSrc: "audio/A1/Kapitel_07/7.02_Wetterbericht.mp3",
                      transcript: "Im Norden bleibt es heute heiter bis wolkig bei Temperaturen um 22 Grad. Im Süden kann es am Nachmittag vereinzelt zu Gewittern kommen.",
                      transcriptEn: "In the north, it will remain mostly sunny to partly cloudy with temperatures around 22 degrees. In the south, isolated thunderstorms may occur in the afternoon."
                    }
                  ]
                },
                {
                  id: "a1-k8",
                  number: 8,
                  title: "Kapitel 8: Essen, Trinken & Kochen",
                  titleEn: "Chapter 8: Food, Drinks & Cooking",
                  theme: "Thema: Lieblingsgerichte, Rezepte zubereiten, Im Restaurant bezahlen",
                  themeEn: "Topic: Favorite dishes, cooking recipes, paying at the restaurant",
                  tracks: [
                    {
                      id: "a1-k8-01",
                      trackNum: "8.01",
                      title: "Im Restaurant: Zusammen oder getrennt zahlen?",
                      titleEn: "At the Restaurant: Pay Together or Separate?",
                      context: "Spektrum A1.2 · Kursbuch S. 96",
                      contextEn: "Spektrum A1.2 · Coursebook p. 96",
                      type: "Dialog",
                      duration: "01:40",
                      seconds: 100,
                      audioSrc: "audio/A1/Kapitel_08/8.01_Rechnung_Zahlen.mp3",
                      transcript: "– Wir möchten bitte zahlen!\n– Gerne, zahlen Sie zusammen oder getrennt?\n– Getrennt bitte. Ich hatte das Schnitzel und das Mineralwasser.",
                      transcriptEn: "– We would like to pay, please!\n– Certainly, paying together or separately?\n– Separately, please. I had the schnitzel and the sparkling water."
                    },
                    {
                      id: "a1-k8-02",
                      trackNum: "8.02",
                      title: "Rezept zubereiten: Schwäbische Spätzle",
                      titleEn: "Recipe Preparation: Swabian Spätzle",
                      context: "Spektrum A1.2 · Kursbuch S. 98",
                      contextEn: "Spektrum A1.2 · Coursebook p. 98",
                      type: "Hörtext",
                      duration: "02:25",
                      seconds: 145,
                      audioSrc: "audio/A1/Kapitel_08/8.02_Spaetzle_Rezept.mp3",
                      transcript: "Für den Teig braucht man Mehl, Eier, eine Prise Salz und etwas Wasser. Den Teig so lange schlagen, bis er Blasen wirft, dann ins kochende Wasser schaben.",
                      transcriptEn: "For the dough you need flour, eggs, a pinch of salt, and some water. Beat the dough until bubbles form, then scrape into boiling water."
                    }
                  ]
                },
                {
                  id: "a1-k9",
                  number: 9,
                  title: "Kapitel 9: Körper, Gesundheit & Arztbesuch",
                  titleEn: "Chapter 9: Body, Health & Doctor's Visit",
                  theme: "Thema: Körperteile, Schmerzen schildern, In der Apotheke & Termine",
                  themeEn: "Topic: Body parts, explaining symptoms, at the pharmacy",
                  tracks: [
                    {
                      id: "a1-k9-01",
                      trackNum: "9.01",
                      title: "Beim Hausarzt: Symptome schildern",
                      titleEn: "At the General Practitioner: Describing Symptoms",
                      context: "Spektrum A1.2 · Kursbuch S. 108",
                      contextEn: "Spektrum A1.2 · Coursebook p. 108",
                      type: "Dialog",
                      duration: "02:00",
                      seconds: 120,
                      audioSrc: "audio/A1/Kapitel_09/9.01_Beim_Hausarzt.mp3",
                      transcript: "– Was fehlt Ihnen denn?\n– Ich habe seit gestern starke Kopfschmerzen und Husten.\n– Haben Sie auch Fieber gemessen? Ich untersuche jetzt Ihre Lunge.",
                      transcriptEn: "– What seems to be the problem?\n– I have had a severe headache and cough since yesterday.\n– Have you taken your temperature? I will examine your lungs now."
                    },
                    {
                      id: "a1-k9-02",
                      trackNum: "9.02",
                      title: "In der Apotheke: Medikamente & Einnahme",
                      titleEn: "At the Pharmacy: Medication & Dosage",
                      context: "Spektrum A1.2 · Kursbuch S. 110",
                      contextEn: "Spektrum A1.2 · Coursebook p. 110",
                      type: "Dialog",
                      duration: "01:30",
                      seconds: 90,
                      audioSrc: "audio/A1/Kapitel_09/9.02_Apotheke.mp3",
                      transcript: "– Nehmen Sie diese Tabletten dreimal täglich nach den Mahlzeiten mit etwas Wasser ein.\n– Brauche ich dafür ein Rezept?\n– Nein, dieses Schmerzmittel ist rezeptfrei.",
                      transcriptEn: "– Take these tablets three times a day after meals with some water.\n– Do I need a prescription for this?\n– No, this pain reliever is available over the counter."
                    }
                  ]
                },
                {
                  id: "a1-k10",
                  number: 10,
                  title: "Kapitel 10: Freunde, Familie & Feste",
                  titleEn: "Chapter 10: Friends, Family & Celebrations",
                  theme: "Thema: Familienmitglieder, Geburtstage planen, Geschenke & Einladungen",
                  themeEn: "Topic: Family members, planning birthdays, gifts & invitations",
                  tracks: [
                    {
                      id: "a1-k10-01",
                      trackNum: "10.01",
                      title: "Geburtstagsüberraschung planen",
                      titleEn: "Planning a Birthday Surprise",
                      context: "Spektrum A1.2 · Kursbuch S. 120",
                      contextEn: "Spektrum A1.2 · Coursebook p. 120",
                      type: "Dialog",
                      duration: "01:50",
                      seconds: 110,
                      audioSrc: "audio/A1/Kapitel_10/10.01_Geburtstagsfeier.mp3",
                      transcript: "– Hast du schon eine Idee für Paulas Geburtstagsgeschenk?\n– Wie wäre es mit einem Gutschein für ein Konzert? Sie liebt Live-Musik!\n– Das ist eine fantastische Idee, ich kümmere mich um die Karten.",
                      transcriptEn: "– Do you already have an idea for Paula's birthday gift?\n– How about a voucher for a concert? She loves live music!\n– That is a fantastic idea, I'll take care of the tickets."
                    },
                    {
                      id: "a1-k10-02",
                      trackNum: "10.02",
                      title: "Einladung per Telefon: Grillabend am Samstag",
                      titleEn: "Phone Invitation: Saturday Barbecue",
                      context: "Spektrum A1.2 · Kursbuch S. 122",
                      contextEn: "Spektrum A1.2 · Coursebook p. 122",
                      type: "Dialog",
                      duration: "01:35",
                      seconds: 95,
                      audioSrc: "audio/A1/Kapitel_10/10.02_Grillabend.mp3",
                      transcript: "– Hallo Lukas! Wir machen am Samstag einen Grillabend im Garten. Hast du Zeit und Lust zu kommen?\n– Ja super gerne! Soll ich einen Salat oder Getränke mitbringen?",
                      transcriptEn: "– Hello Lukas! We are having a barbecue in the garden on Saturday. Do you have time and want to join?\n– Yes, absolutely! Should I bring a salad or drinks?"
                    }
                  ]
                },
                {
                  id: "a1-k11",
                  number: 11,
                  title: "Kapitel 11: Kleidung, Mode & Einkaufen",
                  titleEn: "Chapter 11: Clothes, Fashion & Shopping",
                  theme: "Thema: Kleidungsstücke, Farben, Größen, Umtausch im Kaufhaus",
                  themeEn: "Topic: Items of clothing, colors, sizes, exchange in department store",
                  tracks: [
                    {
                      id: "a1-k11-01",
                      trackNum: "11.01",
                      title: "Im Modegeschäft: Anprobe & Größen",
                      titleEn: "In the Fashion Store: Fitting & Sizes",
                      context: "Spektrum A1.2 · Kursbuch S. 132",
                      contextEn: "Spektrum A1.2 · Coursebook p. 132",
                      type: "Dialog",
                      duration: "01:40",
                      seconds: 100,
                      audioSrc: "audio/A1/Kapitel_11/11.01_Kleidung_Anprobe.mp3",
                      transcript: "– Kann ich Ihnen helfen?\n– Ja bitte, ich suche diese Hose in Schwarz. Haben Sie Größe 38 noch da?\n– Ich schaue kurz im Lager nach. Probieren Sie gerne schon mal die blaue Variante an.",
                      transcriptEn: "– Can I help you?\n– Yes please, I'm looking for these pants in black. Do you still have size 38?\n– I will check the stock room. Feel free to try on the blue one in the meantime."
                    },
                    {
                      id: "a1-k11-02",
                      trackNum: "11.02",
                      title: "Reklamation: Die Jacke umtauschen",
                      titleEn: "Customer Service: Exchanging a Jacket",
                      context: "Spektrum A1.2 · Kursbuch S. 134",
                      contextEn: "Spektrum A1.2 · Coursebook p. 134",
                      type: "Dialog",
                      duration: "01:25",
                      seconds: 85,
                      audioSrc: "audio/A1/Kapitel_11/11.02_Jacke_Umtausch.mp3",
                      transcript: "– Guten Tag, ich möchte diese Jacke umtauschen. Der Reißverschluss klemmt leider.\n– Das tut mir leid. Möchten Sie dieselbe Jacke noch einmal oder den Kaufbetrag erstattet haben?",
                      transcriptEn: "– Good day, I would like to exchange this jacket. The zipper is stuck unfortunately.\n– I'm sorry about that. Would you like another one or a refund of the purchase price?"
                    }
                  ]
                },
                {
                  id: "a1-k12",
                  number: 12,
                  title: "Kapitel 12: Feste, Feiertage & Rückblick",
                  titleEn: "Chapter 12: Festivals, Holidays & Year Review",
                  theme: "Thema: Feste im Jahreskreis (Silvester, Weihnachten, Sommerfest) & Rückblick auf das Jahr",
                  themeEn: "Topic: Annual holidays (New Year's Eve, Christmas, summer party) & year review",
                  tracks: [
                    {
                      id: "a1-k12-01",
                      trackNum: "12.01",
                      title: "Bräuche zu Silvester & Neujahrsvorsätze",
                      titleEn: "New Year's Eve Traditions & Resolutions",
                      context: "Spektrum A1.2 · Kursbuch S. 144",
                      contextEn: "Spektrum A1.2 · Coursebook p. 144",
                      type: "Hörtext",
                      duration: "02:15",
                      seconds: 135,
                      audioSrc: "audio/A1/Kapitel_12/12.01_Silvester_Braeuche.mp3",
                      transcript: "In Deutschland feiert man Silvester traditionell mit Freunden, Bleigießen und um Mitternacht mit einem großen Feuerwerk und Sekt zum Anstoßen auf das neue Jahr.",
                      transcriptEn: "In Germany, New Year's Eve is traditionally celebrated with friends, lead pouring, and at midnight with fireworks and champagne to toast to the new year."
                    },
                    {
                      id: "a1-k12-02",
                      trackNum: "12.02",
                      title: "Rückblick: Was hast du dieses Jahr gelernt?",
                      titleEn: "Year Review: What did you learn this year?",
                      context: "Spektrum A1.2 · Kursbuch S. 146",
                      contextEn: "Spektrum A1.2 · Coursebook p. 146",
                      type: "Dialog",
                      duration: "02:05",
                      seconds: 125,
                      audioSrc: "audio/A1/Kapitel_12/12.02_Rueckblick_A1.mp3",
                      transcript: "– Ich habe vor sechs Monaten mit dem Deutschkurs A1 angefangen und kann mich jetzt schon im Restaurant, beim Einkaufen und im Hotel problemlos verständigen!\n– Herzlichen Glückwunsch, das ist ein toller Fortschritt!",
                      transcriptEn: "– I started the A1 German course six months ago and I can now already easily communicate at the restaurant, while shopping, and at hotels!\n– Congratulations, that is wonderful progress!"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "A2",
      code: "A2",
      name: "A2 · Grundlagen & Vertiefung",
      nameEn: "A2 · Elementary Level",
      badge: "A2 Grundlagen",
      badgeEn: "A2 Elementary",
      badgeColor: "sky",
      colorClass: "bg-sky-500",
      lightColorClass: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800",
      description: "Erweiterte Sprachverwendung: Reisen, Gesundheit, Beruf, Familie & Vergangenheit (In Vorbereitung).",
      descriptionEn: "Expanded language proficiency: Travel, health, work, family & past tense (Coming soon).",
      isUpcoming: true,
      textbooks: []
    },
    {
      id: "B1",
      code: "B1",
      name: "B1 · Selbstständige Sprachverwendung",
      nameEn: "B1 · Intermediate Level",
      badge: "B1 Mittelstufe",
      badgeEn: "B1 Intermediate",
      badgeColor: "amber",
      colorClass: "bg-amber-500",
      lightColorClass: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
      description: "Selbstständige Sprachbeherrschung: Meinungsäußerung, Diskussionen & Berufswelt (In Vorbereitung).",
      descriptionEn: "Independent language command: Expressing opinions, discussions & career (Coming soon).",
      isUpcoming: true,
      textbooks: []
    },
    {
      id: "B2",
      code: "B2",
      name: "B2 · Vertiefte Sprachverwendung",
      nameEn: "B2 · Upper Intermediate",
      badge: "B2 Fortgeschritten",
      badgeEn: "B2 Upper Intermediate",
      badgeColor: "rose",
      colorClass: "bg-rose-500",
      lightColorClass: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800",
      description: "Fließende, präzise Sprachkompetenz: Fachgespräche, Nuancen & Redemittel (In Vorbereitung).",
      descriptionEn: "Fluent and precise proficiency: Specialized discussions, nuance & idioms (Coming soon).",
      isUpcoming: true,
      textbooks: []
    }
  ]
};

// Global helper to find a track by id
function findTrackById(trackId) {
  for (const level of DEUTSCH_PORTAL_DATA.levels) {
    if (!level.textbooks) continue;
    for (const book of level.textbooks) {
      for (const section of book.sections) {
        for (const chapter of section.chapters) {
          const track = chapter.tracks.find(t => t.id === trackId);
          if (track) {
            return {
              track,
              chapter,
              section,
              book,
              level
            };
          }
        }
      }
    }
  }
  return null;
}

// Global helper to get all tracks as flat list
function getAllTracks() {
  const list = [];
  for (const level of DEUTSCH_PORTAL_DATA.levels) {
    if (!level.textbooks) continue;
    for (const book of level.textbooks) {
      for (const section of book.sections) {
        for (const chapter of section.chapters) {
          for (const track of chapter.tracks) {
            list.push({
              track,
              chapter,
              section,
              book,
              level
            });
          }
        }
      }
    }
  }
  return list;
}
