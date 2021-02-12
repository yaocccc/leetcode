# 写一个查询语句，求出好友申请的通过率，用 2 位小数表示。通过率由接受好友申请的数目除以申请总数。
# FriendRequest 表：
# +-----------+------------+--------------+
# | sender_id | send_to_id | request_date |
# +-----------+------------+--------------+
# | 1         | 2          | 2016/06/01   |
# | 1         | 3          | 2016/06/01   |
# | 1         | 4          | 2016/06/01   |
# | 2         | 3          | 2016/06/02   |
# | 3         | 4          | 2016/06/09   |
# +-----------+------------+--------------+

# RequestAccepted 表：
# +--------------+-------------+-------------+
# | requester_id | accepter_id | accept_date |
# +--------------+-------------+-------------+
# | 1            | 2           | 2016/06/03  |
# | 1            | 3           | 2016/06/08  |
# | 2            | 3           | 2016/06/08  |
# | 3            | 4           | 2016/06/09  |
# | 3            | 4           | 2016/06/10  |
# +--------------+-------------+-------------+

# Result 表：
# +-------------+
# | accept_rate |
# +-------------+
# | 0.8         |
# +-------------+

SELECT ROUND(
    IFNULL (
        (
            SELECT count(distinct requester_id, accepter_id)
            FROM RequestAccepted
        )
        / 
        (
            SELECT count(distinct sender_id, send_to_id)
            FROM FriendRequest
        ),
        0
    ),
    2
) as accept_rate;