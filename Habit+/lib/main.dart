import 'package:flutter/material.dart';
import 'screens/habits_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Healthy Habits',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HabitsScreen(),
    );
  }
}
