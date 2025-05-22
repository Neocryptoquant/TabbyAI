from django.contrib import admin
from .models import Tournament, Team, Judge, Schedule

admin.site.register(Tournament)
admin.site.register(Team)
admin.site.register(Judge)
admin.site.register(Schedule)
