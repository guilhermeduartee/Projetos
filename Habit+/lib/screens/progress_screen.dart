import 'package:flutter/material.dart';

class ProgressScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Progresso')),
      body: Center(
        child: Text('Aqui você verá seu progresso!'),
      ),
    );
  }
}
