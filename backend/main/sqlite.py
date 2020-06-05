import sqlite3

conn = sqlite3.connect('service.db')
cursor = conn.cursor()


async def sales_rep_total_revenue(order, rep_id):
    total_revenue = cursor.execute(" SELECT SUM(revenue) from main_saleslines where rep_id = '%s' "
                                   "GROUP BY rep_id " % rep_id).fetchall()

    conn.commit()
    return total_revenue
