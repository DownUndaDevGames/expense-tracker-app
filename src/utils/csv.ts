import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
export async function exportCSV(rows: any[], cats: any[]) {
  const map = new Map(cats.map((c: any) => [c.id, c.name]));
  const header = "id,amount,category,note,date";
  const lines = rows.map((r: any) =>
    [
      r.id,
      r.amount.toFixed(2),
      JSON.stringify(map.get(r.category_id) || "Unknown"),
      JSON.stringify(r.note || ""),
      new Date(r.created_at).toISOString(),
    ].join(",")
  );
  const csv = [header, ...lines].join("\n");
  const uri = FileSystem.cacheDirectory + `expenses-${Date.now()}.csv`;
  await FileSystem.writeAsStringAsync(uri, csv);
  if (await Sharing.isAvailableAsync())
    await Sharing.shareAsync(uri, { mimeType: "text/csv" });
  return uri;
}
