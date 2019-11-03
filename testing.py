from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager

# driver = webdriver.Chrome(ChromeDriverManager().install())
# driver = webdriver.Chrome(executable_path="C:\\Users\JINGGA.BOT\node_modules\chromedriver\lib\chromedriver\chromedriver.exe", service_args=["--verbose", "--log-path=D:\\qc1.log"])
browser = webdriver.Chrome('D:\chromedriver\chromedriver.exe')
driver= webdriver.Chrome()

browser.get('http://www.youtube.com')
assert 'Youtube' in browser.title

elem = browser.find_element_by_name('search_query')  # Find the search box
elem.send_keys('Dr Phil' + Keys.RETURN)

browser.quit()