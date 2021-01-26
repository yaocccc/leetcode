# 编写一个 SQL 查询，同时报告每组玩家和日期，以及玩家到目前为止玩了多少游戏。也就是说，在此日期之前玩家所玩的游戏总数。详细情况请查看示例。

# Activity table:
# +-----------+-----------+------------+--------------+
# | player_id | device_id | event_date | games_played |
# +-----------+-----------+------------+--------------+
# | 1         | 2         | 2016-03-01 | 5            |
# | 1         | 2         | 2016-05-02 | 6            |
# | 1         | 3         | 2017-06-25 | 1            |
# | 3         | 1         | 2016-03-02 | 0            |
# | 3         | 4         | 2018-07-03 | 5            |
# +-----------+-----------+------------+--------------+

# Result table:
# +-----------+------------+---------------------+
# | player_id | event_date | games_played_so_far |
# +-----------+------------+---------------------+
# | 1         | 2016-03-01 | 5                   |
# | 1         | 2016-05-02 | 11                  |
# | 1         | 2017-06-25 | 12                  |
# | 3         | 2016-03-02 | 0                   |
# | 3         | 2018-07-03 | 5                   |
# +-----------+------------+---------------------+

SELECT player_id, event_date, games_played_so_far
FROM (
    SELECT 
        player_id,
        event_date,
        IF(@p=player_id, @s := @s + games_played, @s := games_played) as games_played_so_far,
        @p := player_id
    FROM 
        Activity, (SELECT @p:=NULL,@s:=0) s
    ORDER BY
        player_id, event_date
) t
