from django.db import models
from django.contrib.auth.models import AbstractUser

class Usuario(AbstractUser):
    CPF = models.CharField(max_length=11, unique=True)
    idade = models.IntegerField()
    sexo = models.CharField(max_length=10)
    email = models.EmailField(unique=True)

class Paciente(models.Model):
    nome_completo = models.CharField(max_length=255)
    idade = models.IntegerField()
    sexo = models.CharField(max_length=10)
    CPF = models.CharField(max_length=11, unique=True)
    email = models.EmailField(unique=True)
    endereco = models.CharField(max_length=255)
    nacionalidade = models.CharField(max_length=50)
    procedimentos_realizados = models.TextField()
    ficha_financeira = models.TextField()
    album_de_imagens = models.TextField()

class Produto(models.Model):
    nome = models.CharField(max_length=255)
    tipo = models.CharField(max_length=100)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    fabricante = models.CharField(max_length=255)
    quantidade_estoque = models.IntegerField()

class Procedimento(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.TextField()
    valor = models.DecimalField(max_digits=10, decimal_places=2)
