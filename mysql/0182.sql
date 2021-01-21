# 编写一个 SQL 查询，查找 Person 表中所有重复的电子邮箱。

# 示例：

# +----+---------+
# | Id | Email   |
# +----+---------+
# | 1  | a@b.com |
# | 2  | c@d.com |
# | 3  | a@b.com |
# +----+---------+
# 根据以上输入，你的查询应返回以下结果：

# +---------+
# | Email   |
# +---------+
# | a@b.com |
# +---------+

# S1 聚合后利用 HAVING 子句查询
SELECT Email FROM Person GROUP BY Email HAVING COUNT(Email) > 1;

# S2 利用中间表
SELECT Email FROM
(
    SELECT Email, COUNT(Email) as num
    FROM Persion
    GROUP BY Email
) AS Temp
WHERE num > 1;
