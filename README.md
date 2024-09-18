# wefrick.com
- (wefrick.com)[https://wefrick.com]
- minimalistic personal website built with Remix
- (Conway's Game of Life)[https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life] on the main page


## Game of Life implementation
- 19x19 cells, standard rules
- generations are calculated and visualized in a fixed time step
- initial cell states are stored in a database (DynamoDB)
- click on a cell changes its initial state, updates the database