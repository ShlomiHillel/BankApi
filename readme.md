| Action                        | Method | Link                                              |
| ----------------------------- | ------ | ------------------------------------------------- |
| Create new user               | POST   | /api/newUser/                          |
| Deposit cash in user          | PUT    | /api/deposit/:ID/:cash                    |
| Update credit in user         | PUT    | /api/credit/:ID/:credit                   |
| Transfer cash  users          | PUT    | /api/transfer/:fromID/:cash/:toID |
| Withdraw cash from user       | PUT    | /api/withdraw/:ID/:cash                   |
| Get all users                 | GET    | /api/users                                        |
| Get user                      | GET    | /api/user/:ID                             |
