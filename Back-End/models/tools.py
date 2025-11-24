from pydantic import constr, BaseModel, Field, validator,field_validator
import re


class DateTimeModel(BaseModel):
    """
    The way the date should be structured and formatted
    """
    date: str = Field(..., description="Propertly formatted date", pattern=r'^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$')

    @validator("date")
    def check_format_date(cls, v):
        if not re.match(r'^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$', v):
            raise ValueError("The date should be in format 'YYYY-MM-DD HH:MM'")
        return v
    
class DateModel(BaseModel):
    """
    The way the date should be structured and formatted
    """
    date: str = Field(..., description="Propertly formatted date", pattern=r'^\d{2}-\d{2}-\d{4}$')

    @validator("date")
    def check_format_date(cls, v):
        if not re.match(r'^\d{2}-\d{2}-\d{4}$', v):
            raise ValueError("The date must be in the format 'YYYY-MM-DD'")
        return v

    
class IdentificationNumberModel(BaseModel):
    id: int = Field(..., description="identification number without dots")

    @field_validator("id", mode="before")
    def convert_and_check(cls, v):
        # Convert float string like 1000046.0 → 1000046
        v = int(float(v))

        if not re.match(r'^\d{7,8}$', str(v)):
            raise ValueError("The ID number should be 7 or 8 digits")
        return v