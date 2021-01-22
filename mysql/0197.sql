# 编写一个 SQL 查询，来查找与之前（昨天的）日期相比温度更高的所有日期的 id 。

# 返回结果 不要求顺序 。

# 查询结果格式如下例：

# Weather
# +----+------------+-------------+
# | id | recordDate | Temperature |
# +----+------------+-------------+
# | 1  | 2015-01-01 | 10          |
# | 2  | 2015-01-02 | 25          |
# | 3  | 2015-01-03 | 20          |
# | 4  | 2015-01-04 | 30          |
# +----+------------+-------------+

# Result table:
# +----+
# | id |
# +----+
# | 2  |
# | 4  |
# +----+

# dateDiff 可以获取 两个 date 间的日期差(前-后)
SELECT A.id AS id
FROM  Weather A, Weather B
WHERE
A.Temperature > B.Temperature AND dateDiff(A.RecordDate, B.RecordDate) = 1;
