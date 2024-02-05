The idea of cards is simillar to that of a note, but it is more flexible.

# How cards are stored:

Primary key: space id (we are going away from an entry owner to be a primary key). Instead cards belong to spaces and users have access to spaces

Sort key: cards can be nested to multiple levels:
L_CARD1
CARD1_L_CARD11
CARD1_CARD11_L_CARD111
CARD1_CARD11_L_CARD112
CARD1_CARD_11_L_CARD_113
CARD_1_L_CARD_12
L0_CARD_2_CARD_21

## Queries

Show all cards on the root level: sortkey starts with ROOT\_
Show all cards within CARD_1 on the top level: sortkey starts with CARD_1_L
