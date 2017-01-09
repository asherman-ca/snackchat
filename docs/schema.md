## users
| column name     | data type | details                       |
|-----------------|-----------|-------------------------------|
| id              | integer   | not null, primary key         |
| username        | string    | not null, indexed, unique     |
| password_digest | string    | not null                      |
| session_token   | string    | not null, indexed, unique     |

## dishes
| column name     | data type | details                       |
|-----------------|-----------|-------------------------------|
| id              | integer   | not null, primary key         |
| name            | string    | not null, indexed             |
| img_url         | string    |                               |
| body            | text      | not null                      |


## reviews
| column name     | data type | details                       |
|-----------------|-----------|-------------------------------|
| id              | integer   | not null, primary key         |
| user_id         | integer   | not null, indexed             |
| dish_id         | integer   | not null, indexed             |
| body            | text      | not null                      |
