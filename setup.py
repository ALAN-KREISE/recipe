from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in recipe/__init__.py
from recipe import __version__ as version

setup(
	name="recipe",
	version=version,
	description="Recipe",
	author="IDK",
	author_email="info@ideenkreise.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
