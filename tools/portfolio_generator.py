from sty import fg, bg, ef, rs
import pathlib
from os import path
import inquirer

from jinja2 import Environment, FileSystemLoader
import re
import json
from jinja2 import pass_eval_context
from markupsafe import Markup, escape


def cError(text): return fg.red + text + fg.rs
def cWarning(text): return fg.li_yellow + text + fg.rs
def cOk(text): return fg.li_green + text + fg.rs
def cInfo(text): return fg.li_blue + text + fg.rs
def cHeader(text): return fg.magenta + text + fg.rs
def cDesc(text): return fg.li_grey + text + fg.rs


@pass_eval_context
def nl2br(eval_ctx, value):
    _paragraph_re = re.compile(r'(?:\r\n|\r(?!\n)|\n){2,}')
    result = u'\n\n'.join(u'<p>%s</p>' % p.replace(u'\r\n', u'<br><br>')
                          for p in _paragraph_re.split(value))
    if eval_ctx.autoescape:
        result = Markup(result)
    return result


def ask_overwrite_file(file_name: str):
    ask = [
        inquirer.Confirm(
            "overwrite", message=f"{file_name} already exists, do you want to overwrite it?")
    ]
    answer = inquirer.prompt(ask)
    return answer['overwrite']


def save_render_file(file_name: str, data: str):
    with open(file_name, "w", encoding='utf-8') as fh:
        fh.write(data)
    print(cInfo(
        f"You can find your generated portfolio in: {file_name}"))


# define the path to the template file
template_path = 'templates'
template_filename = 'index.html.twig'
template_datasource = 'datasource.json'
template_render_file = '..\index.html'
print(cHeader("Portfolio Page Builder v1.2"))


# create an environment to load templates
env = Environment(loader=FileSystemLoader(template_path))

# add support nl2br filter
env.filters['nl2br'] = nl2br



# define the variables
try:

    # load the template
    template = env.get_template(template_filename)
    print(cOk(f"Load template from: {template_path}\{template_filename}"))

    data = json.load(open(template_datasource, encoding='utf-8'))
    print(cOk(f"Load data from: {template_datasource}"))

    # render the template
    result = template.render(data)

    print(cDesc('Generating the portfolio...'))

    file = pathlib.Path(template_render_file)
    if file.exists():
        if ask_overwrite_file(template_render_file):
            save_render_file(file_name=template_render_file, data=result)
        else:
            print(cWarning("File not overwritten. Operation aborted by user"))
    else:
        save_render_file(file_name=template_render_file, data=result)

except FileNotFoundError:
    print(cError("Error: File 'datasource.json' not found."))
except json.decoder.JSONDecodeError as e:
    print(cError(f"Error decoding JSON: {e}"))
except IOError as e:
    print(cError(f"Error writing to file:{e}"))
