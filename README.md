# Case - React app

## Beskrivelse
Denne kodebase indeholder en React-applikation (baseret på create-react-app), som kan liste en række tilfældige produkter i en tabel.

## Afvikling
Når du har klonet projektet ned, skal du køre `npm install` og efterfølgende `npm start` – herefter vil applikationen starte op på http://localhost:3000

## Opgave
Lige nu vises der tre "dummy"-produkter i tabellen, når man trykker på "Hent alle produkter". I stedet for dette vil vi gerne have, at produkterne hentes fra API'et, der ligger på: https://au-case-webapi.azurewebsites.net/api/products (se note)

Det står dig frit for, hvordan du henter data, dvs. du kan bruge fetch, axios, RTK Query eller et andet library til at hente data.

Overvej følgende – og vis det gerne med et kodeeksempel: 

– Hvordan vil du håndtere, at API'et svarer langsomt? (Kig evt. på https://delphinus.au.dk/components/processing-state)

– Hvordan kan tabellen gøres mere overskuelig og brugervenlig? (forestil dig fx at API'et understøtter paging)

– Hvordan vil du ellers forbedre applikationen i forhold til fx genanvendelighed, state management og robusthed?

# Note
– Du behøver ikke forholde dig til, om det, du laver, er pænt. Dvs. du skal ikke skrive CSS og du skal ikke installere Tailwind eller lignende. Du må derimod gerne orientere dig på delphinus.au.dk, og se, om du kan bruge designelementer, der allerede findes.

– Hvis du også laver .NET-casen, må du gerne kalde API'et på din localhost i stedet‚ ligesom du gerne må optimere på API-kaldet (fx implementere paging og sortering).

– Hvis du committer kode til git, så lav din egen branch.