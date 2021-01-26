# 编写一个 SQL 查询，报告在首次登录的第二天再次登录的玩家的比率，四舍五入到小数点后两位。
# 换句话说，您需要计算从首次登录日期开始至少连续两天登录的玩家的数量，然后除以玩家总数。

# Activity table:
# +-----------+-----------+------------+--------------+
# | player_id | device_id | event_date | games_played |
# +-----------+-----------+------------+--------------+
# | 1         | 2         | 2016-03-01 | 5            |
# | 1         | 2         | 2016-03-02 | 6            |
# | 2         | 3         | 2017-06-25 | 1            |
# | 3         | 1         | 2016-03-02 | 0            |
# | 3         | 4         | 2018-07-03 | 5            |
# +-----------+-----------+------------+--------------+

# Result table:
# +-----------+
# | fraction  |
# +-----------+
# | 0.33      |
# +-----------+

# ROUND 返回一个数值保留参数2位数小数的结果(四舍五入)
SELECT
    ROUND(COUNT(DISTINCT player_id)/(SELECT COUNT(distinct player_id) FROM Activity), 2) AS fraction
FROM
    Activity
WHERE
    (player_id,event_date)
    IN (
        SELECT 
            player_id,
            Date(min(event_date)+1)
        FROM Activity
        GROUP BY player_id
    );
