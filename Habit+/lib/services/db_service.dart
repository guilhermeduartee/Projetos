import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

class DBService {
  static Future<Database> initDatabase() async {
    final dbPath = await getDatabasesPath();
    return openDatabase(
      join(dbPath, 'habits.db'),
      onCreate: (db, version) {
        return db.execute(
          'CREATE TABLE habits(id INTEGER PRIMARY KEY, name TEXT, date TEXT)',
        );
      },
      version: 1,
    );
  }
}
