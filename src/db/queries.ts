import { database } from "./index";

const db = database.getDB();

export const listCategories = () =>
  new Promise((res, rej) =>
    db.transaction((tx) =>
      tx.executeSql(
        "SELECT * FROM categories ORDER BY name;",
        [],
        (_, rs) => {
          const out = [];
          for (let i = 0; i < rs.rows.length; i++) out.push(rs.rows.item(i));
          res(out);
        },
        (_, e) => {
          rej(e);
          return true;
        }
      )
    )
  );

export const listExpenses = (limit = 100, offset = 0) =>
  new Promise((res, rej) =>
    db.transaction((tx) =>
      tx.executeSql(
        "SELECT * FROM expenses ORDER BY created_at DESC LIMIT ? OFFSET ?;",
        [limit, offset],
        (_, rs) => {
          const out = [];
          for (let i = 0; i < rs.rows.length; i++) out.push(rs.rows.item(i));
          res(out);
        },
        (_, e) => {
          rej(e);
          return true;
        }
      )
    )
  );

export const addExpense = (
  amount: number,
  category_id: number,
  note: string,
  when: number
) =>
  new Promise<number>((res, rej) =>
    db.transaction((tx) =>
      tx.executeSql(
        "INSERT INTO expenses (amount,category_id,note,created_at,updated_at) VALUES (?,?,?,?,?);",
        [amount, category_id, note, when, Date.now()],
        (_, rs) => res(rs.insertId as any),
        (_, e) => {
          rej(e);
          return true;
        }
      )
    )
  );

export const deleteExpense = (id: number) =>
  new Promise<void>((res, rej) =>
    db.transaction((tx) =>
      tx.executeSql(
        "DELETE FROM expenses WHERE id=?;",
        [id],
        () => res(),
        (_, e) => {
          rej(e);
          return true;
        }
      )
    )
  );
