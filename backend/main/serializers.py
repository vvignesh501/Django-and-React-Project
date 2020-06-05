from rest_framework import serializers

from .models import EmployeeRelation, SalesLines


class EmployeeRelationSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeRelation
        fields = '__all__'


class SalesLinesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalesLines
        fields = '__all__'
