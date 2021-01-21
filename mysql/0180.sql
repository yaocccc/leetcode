# 编写一个 SQL 查询，查找所有至少连续出现三次的数字。

# +----+-----+
# | Id | Num |
# +----+-----+
# | 1  |  1  |
# | 2  |  1  |
# | 3  |  1  |
# | 4  |  2  |
# | 5  |  1  |
# | 6  |  2  |
# | 7  |  2  |
# +----+-----+
# 例如，给定上面的 Logs 表， 1 是唯一连续出现至少三次的数字。

# +-----------------+
# | ConsecutiveNums |
# +-----------------+
# | 1               |
# +-----------------+

SELECt distinct(l1.Num) as ConsecutiveNums
FROM Logs l1, Logs l2, Logs l3
WHERE (l1.id = l2.id - 1) AND (l1.id = l3.id - 2) 
AND (l1.num = l2.num) AND (l1.num = l3.num);
