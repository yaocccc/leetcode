# 在表 orders 中找到订单数最多客户对应的 customer_number 。
# 数据保证订单数最多的顾客恰好只有一位。

# orders：
# | order_number | customer_number | order_date | required_date | shipped_date | status | comment |
# |--------------|-----------------|------------|---------------|--------------|--------|---------|
# | 1            | 1               | 2017-04-09 | 2017-04-13    | 2017-04-12   | Closed |         |
# | 2            | 2               | 2017-04-15 | 2017-04-20    | 2017-04-18   | Closed |         |
# | 3            | 3               | 2017-04-16 | 2017-04-25    | 2017-04-20   | Closed |         |
# | 4            | 3               | 2017-04-18 | 2017-04-28    | 2017-04-25   | Closed |         |
# 样例输出

# | customer_number |
# |-----------------|
# | 3               |

SELECT customer_number
FROM orders
GROUP BY customer_number
ORDER BY COUNT(customer_number) DESC
LIMIT 1
