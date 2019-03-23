## orgs
- id
- code
- name (String)
- address (address)
- contact (org_contact<>)
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
- zip_code


## org_contact
- name
- email
- mobile
- role
- notes


## org_tags (ENUM)
- code
- tag
- *DATA*:
    - restaurante
    - bar
    - churrascaria
    - cabana
    - boate
    - ar_livre
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
- org_code (String)
- org_name (String)
- org_city
- title
- img (String)
- featured (Boolean)
- tags (String<>)
    - 
    - 
    - 
    - 


## event_tags (ENUM):
- code
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
- code (String)
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


## place_tags
- code
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

