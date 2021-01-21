# Employee 表包含所有员工信息，每个员工有其对应的工号 Id，姓名 Name，工资 Salary 和部门编号 DepartmentId 。

# +----+-------+--------+--------------+
# | Id | Name  | Salary | DepartmentId |
# +----+-------+--------+--------------+
# | 1  | Joe   | 85000  | 1            |
# | 2  | Henry | 80000  | 2            |
# | 3  | Sam   | 60000  | 2            |
# | 4  | Max   | 90000  | 1            |
# | 5  | Janet | 69000  | 1            |
# | 6  | Randy | 85000  | 1            |
# | 7  | Will  | 70000  | 1            |
# +----+-------+--------+--------------+
# Department 表包含公司所有部门的信息。

# +----+----------+
# | Id | Name     |
# +----+----------+
# | 1  | IT       |
# | 2  | Sales    |
# +----+----------+
# 编写一个 SQL 查询，找出每个部门获得前三高工资的所有员工。例如，根据上述给定的表，查询结果应返回：

# +------------+----------+--------+
# | Department | Employee | Salary |
# +------------+----------+--------+
# | IT         | Max      | 90000  |
# | IT         | Randy    | 85000  |
# | IT         | Joe      | 85000  |
# | IT         | Will     | 70000  |
# | Sales      | Henry    | 80000  |
# | Sales      | Sam      | 60000  |
# +------------+----------+--------+

# PARTITION 类似于 GROUP
SELECT B.Name AS Department, A.Name as Employee, A.Salary as Salary FROM
(
    SELECT 
        Name,
        Salary,
        DepartmentId,
        DENSE_RANK() OVER(PARTITION BY DepartmentId ORDER BY Salary desc) AS 'rank'
    FROM Employee
) A
JOIN Department B
ON A.DepartmentId = B.Id
WHERE A.rank < 4;
