## orgs
- id
- name (String)
- address (address)
- contacts (orgContact<>)
- mobile (String)
- land (String)
- email (String)
- notes (String)
- status (Boolean)


## address
- state
- city
- neighborhood
- street
- number
- complement
- zipCode


## orgContact
- name
- email
- mobile
- role
- notes


## orgTags (ENUM)
- tag
- *DATA*:
    - restaurante
    - bar
    - churrascaria
    - cabana
    - boate
    - ar-livre
    - escola
    - teatro
    - shopping
    - cinema
    - quiosque
    - estádio
    - arena
    - pizzaria
    - 


## events
- start (Date)
- end (Date)
- org (String)
- city (String)
- title
- img (String)
- featured (Boolean)
- tags (String<>)
    - 
    - 
    - 
    - 


## eventTags (ENUM):
- tag
- *DATA*:
    - axé
    - blues
    - eletrônica
    - forró
    - funk
    - hip-hop
    - jazz
    - mpb
    - pagode
    - pop-rock
    - samba
    - sertanejo


## cities:
- name (String)
- cities (String<>)
- *DATA*:
    - Ilhéus / Olivença
    - Canavieiras
    - Belmonte / Mogiquiçaba
    - Santo André / Santo Antônio
    - Santa Cruz Cabrália
    - Porto Seguro
    - Araial D' Ajuda
    - Trancoso
    - Caraíva
    - Prado / Cumuruxatiba / Ponta do Corumbau
    - Alcobaça
    - Caravelas


## places
- name
- city
- tags


## placeTags
- type
- *data*:
    - praia
    - mirante
    - rio
    - praça
    - museu
    - shopping
    - cinema
    - teatro
    - rua
    - grupo
    - 

