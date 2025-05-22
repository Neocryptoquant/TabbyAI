from django.db import models

# Create your models here.

class Tournament(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255, blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.name

class Team(models.Model):
    name = models.CharField(max_length=255)
    institution = models.CharField(max_length=255, blank=True, null=True)
    tournament = models.ForeignKey(Tournament, related_name='teams', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Judge(models.Model):
    name = models.CharField(max_length=255)
    expertise_level = models.IntegerField(default=1)
    tournament = models.ForeignKey(Tournament, related_name='judges', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Schedule(models.Model):
    tournament = models.ForeignKey(Tournament, related_name='schedules', on_delete=models.CASCADE)
    round_number = models.IntegerField()
    date = models.DateField()

    def __str__(self):
        return f"{self.tournament.name} - Round {self.round_number}"
