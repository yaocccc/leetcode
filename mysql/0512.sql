# 请编写一个 SQL 查询，描述每一个玩家首次登陆的设备名称

# Activity table:
# +-----------+-----------+------------+--------------+
# | player_id | device_id | event_date | games_played |
# +-----------+-----------+------------+--------------+
# | 1         | 2         | 2016-03-01 | 5            |
# | 1         | 2         | 2016-05-02 | 6            |
# | 2         | 3         | 2017-06-25 | 1            |
# | 3         | 1         | 2016-03-02 | 0            |
# | 3         | 4         | 2018-07-03 | 5            |
# +-----------+-----------+------------+--------------+

# Result table:
# +-----------+-----------+
# | player_id | device_id |
# +-----------+-----------+
# | 1         | 2         |
# | 2         | 3         |
# | 3         | 1         |
# +-----------+-----------+

SELECT player_id, device_id
FROM activity
WHERE 
(player_id, event_date) IN
(
    SELECT player_id, min(event_date)
    FROM activity
    GROUP BY player_id
);
